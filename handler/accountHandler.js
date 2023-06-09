/* eslint-disable max-len */
const httpStatus = require('http-status');
const Response = require('../model/Response');
const Account = require('../model/Account');
const accountPassValidator = require('../utils/accountPassValidator');
const bcrypt = require('../utils/bcrypt');
const uploadFile = require('../middleware/uploadImageFile');
const { format } = require('util');

const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'patuli-project'
});

const bucket = storage.bucket('patuli-storage');

const getAccount = async (req, res) => {
  const account = req.currentUser;
  const response = new Response.Success(false, 'success', account);
  res.json(response);
};

const updatePassword = async (req, res) => {
  let response = null;

  try {
    const accountId = req.currentUser._id;
    const accountPassword = req.currentUser.password;
    const request = await accountPassValidator.validateAsync(req.body);
    const bodyAccountPassword = request.oldPassword;
    const isValidPassword = await bcrypt.compare(bodyAccountPassword, accountPassword);

    if (!isValidPassword) {
      response = new Response.Error(true, 'Password lama tidak sesuai');
      res.status(httpStatus.BAD_REQUEST).json(response);
    }

    const hashedPassword = await bcrypt.hash(request.newPassword);

    await Account.findByIdAndUpdate(accountId, { password: hashedPassword });

    response = new Response.Success(false, 'Password berhasil diubah');
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const updateAccount = async (req, res) => {
  try {
    const accountId = req.currentUser._id;

    await uploadFile(req, res);

    if (!req.file) {
      const response = new Response.Error(400, 'Tolong unggah foto!' );
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }

    const fileExt = req.file.originalname.split('.').pop();

    if (fileExt !== 'png' && fileExt !== 'jpg' && fileExt !== 'jpeg' && fileExt !== 'PNG' && fileExt !== 'JPG' && fileExt !== 'JPEG') {
      const response = new Response.Error(400, 'Hanya menerima foto dengan format PNG, JPG, dan JPEG');
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }

    const blob = bucket.file(`account-images/${accountId}/` + req.file.originalname.toLowerCase().split(' ').join('-'  + Date.now() + '.'));
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on('error', (err) => {
      const response = new Response.Error(500, err.message );
      return res.status(httpStatus.BAD_REQUEST).json(response);
    });

    blobStream.on('uploaded', async (data) => {
      const uploadUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name.toLowerCase()}`
      );
    });

    const uploadUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name.toLowerCase().split(' ').join('-')}`;

    await Account.findByIdAndUpdate(accountId, { imageUrl: uploadUrl } );

    const response = new Response.Success(false, 'Foto profil berhasil diubah');
    res.set('Content-Type', 'multipart/form-data')
    res.status(httpStatus.OK).json(response);

    blobStream.end(req.file.buffer);
  } catch (error) {
    const response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getAccount, updateAccount, updatePassword };
