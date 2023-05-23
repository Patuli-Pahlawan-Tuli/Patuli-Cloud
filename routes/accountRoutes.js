const express = require('express');

const router = express.Router();
const Auth = require('../middleware/Auth');
const accountHandler = require('../handler/accountHandler');

router.use(Auth);
router.get('/profile', accountHandler.getAccount);
router.put('/edit-password', accountHandler.updatePassword);
router.put('/edit-image', accountHandler.updateAccount);

// profile image route
// router.post("/profile/images", userController.updateUser);

// history route
// router.get("/history", historyController.getHistory);

module.exports = router;
