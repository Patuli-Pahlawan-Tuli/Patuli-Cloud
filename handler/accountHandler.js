const response = require('../model/response');
const Account = require('../model/account');
// const UserImages = require("../model/UserImages");
const httpStatus = require('http-status');
// const processFile = require("../middleware/uploadFile");
const { format } = require('util');

// const {Storage} = require('@google-cloud/storage');
// const storage = new Storage({ keyFilename: "env.json" });
// const bucket = storage.bucket("inacure-storage");

const getAccount = async (req, res) => {
  const account = req.currentAccount;
  const response = new Response.Success(false, null, user);
  res.json(response);
};


const updateAccount = async (req, res) => {
  try {    
    const accountId = req.currentAccount._id;
    const accountEmail = req.currentAccount.email;

    await processFile(req, res);
    
    // if (!req.file) {
    //   const response = new Response.Error(400, "Please upload a image!" );
    //   return res.status(httpStatus.BAD_REQUEST).json(response);
    // }

    // const ext = req.file.originalname.split('.').pop();
    // if (ext !== "png" && ext !== "jpg" && ext !== "jpeg" && ext !== "PNG" && ext !== "JPG" && ext !== "JPEG") {
    //   const response = new Response.Error(400, "Only images are allowed" );
    //   return res.status(httpStatus.BAD_REQUEST).json(response);
    // }

    // const blob = bucket.file(`account-images/${accountId}/` + req.file.originalname.toLowerCase().split(" ").join("-"  + Date.now() + "."));
    // const blobStream = blob.createWriteStream({
    //   resumable: false,
    // });

    // blobStream.on("error", (err) => {
    //   const response = new Response.Error(500, err.message );
    //   return res.status(httpStatus.BAD_REQUEST).json(response);
    // });

    // blobStream.on("uploaded", async (data) => {
    //   const uploadUrl = format(
    //     `https://storage.googleapis.com/${bucket.name}/${blob.name.toLowerCase()}`
    //   );
    // });

    // const uploadUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name.toLowerCase().split(" ").join("-")}`;
    
    const upload = new Account({
        accountId: accountId,
        email: accountEmail,
        // imageUrl: uploadUrl,
    });
    const uploadSave = await upload.save();

    // Update account profiles images
    // await Account.findByIdAndUpdate(accountId, { imageUrl: uploadUrl } );

    // Return response
    const response = new Response.Success(false, null, uploadSave);
    res.status(httpStatus.OK).json(response);

    // blobStream.end(req.file.buffer);
  } catch (error) {
    const response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getAccount, updateAccount };