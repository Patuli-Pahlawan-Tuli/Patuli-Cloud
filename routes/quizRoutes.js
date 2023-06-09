const express = require('express');
const Auth = require("../middleware/Auth");

const router = new express.Router();
const quizHandler = require('../handler/quizHandler');

router.use(Auth);
router.get('/', quizHandler.getAllQuiz);
router.get('/:quizDifficulty', quizHandler.getQuizByDifficulty);
router.get('/:quizDifficulty/:subQuiz', quizHandler.getQuizBySubQuiz);
router.get('/:quizDifficulty/:subQuiz/:quizNumber', quizHandler.getQuizByNumber);

module.exports = router;
