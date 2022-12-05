const mongoose = require('mongoose');

const containerTemplate = new mongoose.Schema({
    Identifier:{
        type: Number,
        required:true
    },
    boatName: {
        type: String,
        required: true
    },
    EQVPEVP: {
        type: String,
        required: true
    },
    load:{
        type: String,
        required: true
    },
    loaded: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Container',containerTemplate);