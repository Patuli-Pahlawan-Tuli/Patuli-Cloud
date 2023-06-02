const express = require('express');
const dotenv = require('dotenv');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const app = express();

// ENDPOINT
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const questionRoutes = require('./routes/questionRoutes');
const levelRoutes = require('./routes/levelRoutes');

// MIDDLEWARE
const pageNotFound = require('./utils/pageNotFound');

// Database & Env
dotenv.config();
require('./database/mongodb');

// PORT AND PATH
const PORT = process.env.PORT || 8000;
const VERSION_API = '/api/v1';
const appendUrl = (url) => `${VERSION_API}${url}`;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use(appendUrl('/auth'), authRoutes);
app.use(appendUrl('/account'), accountRoutes);
app.use(appendUrl('/lessons'), lessonRoutes);
app.use(appendUrl('/questions'), questionRoutes);
app.use(appendUrl('/level'), levelRoutes);

// ENDPOINT NOT CREATED
app.use('/', pageNotFound);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
