const mongoose = require('mongoose');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const secretmanagerClient = new SecretManagerServiceClient();

const callAccessSecretVersion = async () => {
  // Construct request
  const request = {
    name: 'projects/706533766585/secrets/MONGO_DB/versions/latest'
  };

  // Run request
  const [response] = await secretmanagerClient.accessSecretVersion(request);
  const secretValue = response.payload.data.toString();
  return secretValue;
}

const connectToDatabase = async () => {
  // try {
  //   const secretValue = await callAccessSecretVersion();
  //   await mongoose.connect(secretValue);
  //   console.log('Database Connected');
  // } catch (error) {
  //   console.log(error.message);
  // }

  const secretValue = await callAccessSecretVersion();

  await mongoose
  .connect(secretValue)
  .then(() => console.log('Database Connected'))
  .catch((error) => console.log(error.message));
}

connectToDatabase();