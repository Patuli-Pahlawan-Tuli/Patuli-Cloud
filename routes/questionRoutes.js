const express = require('express');
const Auth = require("../middleware/Auth");

const router = new express.Router();
const questionHandler = require('../handler/questionHandler');

router.use(Auth);
router.get('/', questionHandler.getAllQuestion);
router.get('/:questionDifficulty', questionHandler.getQuestionByDifficulty);
// router.get('/questionDiff/:_id', questionHandler.getQuestion);
router.get('/:questionDifficulty/:questionNumber', questionHandler.getQuestionByNumber);

module.exports = router;
