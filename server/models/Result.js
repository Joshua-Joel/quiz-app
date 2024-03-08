const mongoose = require('mongoose');
const resultSchema = new mongoose.Schema({
    quiz_id: {
        type: Number,
        required: true
    },
    user_email: {
        type: String,
        required: true,
    },
    marks:{
        type: Number,
        required: true
    },
    selected_options: {
        type: [String],
        required: true,
    },
    status:{
        type: String,
        required: true
    }
});
const Result = mongoose.model('Results', resultSchema);

module.exports = Result;