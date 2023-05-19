const express = require('express');
const dotenv = require('dotenv');

const app = express();

// ENDPOINT
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');

// MIDDLEWARE
const pageNotFound = require('./utils/pageNotFound');

// Database & Env
dotenv.config();
require('./database/mongodb');

// PORT AND PATH
const PORT = process.env.PORT || 8080;
const VERSION_API = '/api/v1';
const appendUrl = (url) => `${VERSION_API}${url}`;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use(appendUrl('/auth'), authRoutes);
app.use(appendUrl('/account'), accountRoutes);

// ENDPOINT NOT CREATED
app.use('/', pageNotFound);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
