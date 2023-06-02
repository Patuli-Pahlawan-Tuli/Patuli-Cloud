const express = require('express');
const Auth = require("../middleware/Auth");

const router = new express.Router();
const lessonHandler = require('../handler/lessonHandler');

router.use(Auth);
router.get('/', lessonHandler.getAllLesson);
router.get('/:lessonType', lessonHandler.getLessonByType);
router.get('/:lessonType/:lessonNumber', lessonHandler.getLessonByNumber);

module.exports = router;
