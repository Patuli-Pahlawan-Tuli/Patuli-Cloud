const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'patuli-project'
});

const bucketName = 'patuli-storage';
const folderName = 'Hash';
const fileName = 'hashed.json';

const bucket = storage.bucket(bucketName);
const file = bucket.file(`${folderName}/${fileName}`);

const getHash = async (res) => {
  try {
    const [contents] = await file.download();
    const json = JSON.parse(contents.toString());

    res.json(json);
  } catch (err) {
    if (err.code === 404) {
      res.status(404).json({ error: 'File not found' });
    } else {
      console.error('Error downloading the file:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = { getHash };
