const express = require('express');
const Auth = require("../middleware/Auth");

const router = express.Router();
const Auth = require('../middleware/Auth');
const levelHandler = require('../handler/levelHandler');

router.use(Auth);
router.put('/edit-exp', levelHandler.updateExp);
router.put('/edit-level', levelHandler.updateLevel);

module.exports = router;
