const mongoose = require('mongoose');

const piloteTemplate = new mongoose.Schema({
    Identifier:{
        type: Number,
        required:true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nextMission:{
        type: String,
        required: false
    },
    previousMission: {
        type: String,
        required: false
    },
    available: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Pilotes',piloteTemplate);