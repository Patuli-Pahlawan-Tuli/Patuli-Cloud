const express = require('express');
const Auth = require("../middleware/Auth");

const router = express.Router();
const levelHandler = require('../handler/levelHandler');

router.use(Auth);
router.put('/edit-exp', levelHandler.updateExp);
router.put('/edit-level', levelHandler.updateLevel);
router.put('/edit-completed-quiz-beginner', levelHandler.updateCompletedQuizBeginner);
router.put('/edit-completed-quiz-intermediate', levelHandler.updateCompletedQuizIntermediate);
router.put('/edit-completed-quiz-expert', levelHandler.updateCompletedQuizExpert);
router.put('/edit-completed-sub-quiz', levelHandler.updateCompletedSubQuiz);

module.exports = router;
