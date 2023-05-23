const express = require('express');
const Auth = require("../middleware/Auth");


const router = new express.Router();
const lessonHandler = require('../handler/lessonHandler');

router.use(Auth);
router.get('/', lessonHandler.getAllLesson);
router.get('/:_id', lessonHandler.getLesson);

module.exports = router;
