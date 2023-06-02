const express = require('express');

const router = express.Router();
const Auth = require('../middleware/Auth');
const accountHandler = require('../handler/accountHandler');

router.use(Auth);
router.get('/profile', accountHandler.getAccount);
router.put('/edit-password', accountHandler.updatePassword);
router.put('/edit-image', accountHandler.updateAccount);

module.exports = router;
