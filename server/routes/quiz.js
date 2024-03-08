const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");
const Result = require("../models/Result");
const authenticateToken = require("../middleware/authMiddleware");

router.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3001",
    "Access-Control-Allow-Credentials": true
  }),
  next();
})

router.post("/create-quiz", authenticateToken ,async (req, res) => {
  console.log(req.user);
  try {
    const quizCount = await Quiz.countDocuments();
    const newQuiz = new Quiz({
      quizId: quizCount + 111111,
      questions: req.body.questions,
      owner_email: req.user.user_email 
    });
    const savedQuiz = await newQuiz.save();
    console.log("Quiz created successfully");
    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/questions", authenticateToken, async (req, res) => {
  try {
    const quizid = req.query.quizid;
    const quizRecord = await Quiz.findOne({ quizId: quizid });
    var questions = quizRecord.questions;
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/submit", authenticateToken, async (req, res) => {
  try {
    var correctAnswersCount = 0;
    const quizid = req.body.quizid;
    const selected = req.body.selected;
    const quizRecord = await Quiz.findOne({ quizId: quizid });
    var questionGroups = quizRecord.questions;
    for (let i = 0; i < questionGroups.length; i++) {
      if (selected[i] === questionGroups[i].answer) {
        correctAnswersCount++;
      }
    }
    var status = correctAnswersCount > 5 ? "pass" : "fail";
    const result = new Result({quiz_id:quizid,user_email:req.user.user_email,marks:correctAnswersCount,selected_options:selected,status:status});
    await result.save();
    res.status(201).json({message:"Quizz submitted successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/results", authenticateToken(), async (req, res) => {
    try {
      var correctAnswersCount = 0;
      const quizid = req.query.quiz_id;
      const quizRecord = await Quiz.findOne({ quizId: quizid });
      const result = await Result.findOne({quiz_id: quizid,user_email: req.user.user_email },{status:1,marks:1,selected_options:1,_id:0});
      const status = result.status;

      var questionGroups = quizRecord.questions;
      const questions = questionGroups.map(({ questionName }) => questionName);
      const correctOptions = questionGroups.map(({ answer }) => answer);
      res.status(200).json({
        correct_answers_count: result.marks,
        status: status,
        min_passmark: 6,
        questions: questions,
        correct_options: correctOptions,
        selected_options: result.selected_options
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  
module.exports = router;
