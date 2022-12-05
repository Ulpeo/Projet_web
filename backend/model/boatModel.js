const mongoose = require('mongoose');

const boatTemplate = new mongoose.Schema({
    Identifier:{
        type: Number,
        required:true
    },
    boatName: {
        type: String,
        required: true
    },
    compagnyName: {
        type: String,
        required: true
    },
    load:{
        type: String,
        required: false
    },
    loaded: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Boat',boatTemplate);