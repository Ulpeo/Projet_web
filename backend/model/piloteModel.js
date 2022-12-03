const mongoose = require('mongoose');

const piloteTemplate = new mongoose.Schema({
    Identifier:{
        type: int,
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
        type: Date,
        required: false
    },
    previousMission: {
        type: Date,
        required: false
    },
    available: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('myTable',piloteTemplate);