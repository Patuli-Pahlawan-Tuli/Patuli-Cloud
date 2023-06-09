const express = require('express');
const dotenv = require('dotenv');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const app = express();

// ENDPOINT
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const quizRoutes = require('./routes/quizRoutes');
const levelRoutes = require('./routes/levelRoutes');
const hashRoutes = require('./routes/hashRoutes');

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
app.use(appendUrl('/quizzes'), quizRoutes);
app.use(appendUrl('/level'), levelRoutes);
app.use(appendUrl('/hash'), hashRoutes);

// ENDPOINT NOT CREATED
app.use('/', pageNotFound);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
