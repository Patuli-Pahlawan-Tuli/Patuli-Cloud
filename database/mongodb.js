const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://Bruh:Bruh@testing-patuli.ocvgxw3.mongodb.net/')
  .then(() => console.log('Database Connected'))
  .catch((error) => console.log(error.message));
