const mongoose = require('mongoose');
const Question = require('./Question');
const quizSchema = new mongoose.Schema({
    quizId: {
        type: Number,
        required: true
    },
    questions: {
        type: [Question.schema],
        required: true,
    },
    owner_email:{
        type: String,
        required: true
    }
}, { versionKey: false });
const Quiz = mongoose.model('Quizs', quizSchema);

module.exports = Quiz;