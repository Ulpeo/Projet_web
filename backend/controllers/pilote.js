const mongoose = require('mongoose');
const axios = require('axios');

const Pilotes = require('../model/piloteModel');
const piloteTemplateCopy = require("../model/piloteModel");

exports.findAll = (req, res) => {
    Pilotes.find({}).then((pilotes) => {
        // Get List of movie and return JSON
        res.status(200).json({pilotes: pilotes});
    })
}

exports.findOne = (req, res) => {
    Pilotes.find({}).then((pilotes) => {
        // Get List of movie and return JSON
        res.status(200).json({pilotes: pilotes});
    })
}

exports.addPilote = (req, res) => {
    Pilotes.find({}).then((pilotes) => {
        // Get List of movie and return JSON
        res.status(200).json({pilotes: pilotes});
    })
}

// Pas testé
exports.deleteOne = (req, res) => {
    // Get the :id of the movie we want to delete from the params of the request
    const {id} = req.params;

    Pilotes.deleteOne({_id: id}).then((pilote) => {
        res.status(200).json({
            pilote: id,
            message: `${pilote} deleted !`
        });
    }).catch(() => {
        res.status(404).json({
            message: `Pilote not found !`
        });
    })
}


exports.modifyFilm = (req, res) => {
    // Get the :id of the movie we want to update from the params of the request
    const {id} = req.params;
    // Get the new data of the movie we want to update from the body of the request
    const {pilote} = req.body;


    Pilotes.findByIdAndUpdate(id, {...pilote}).then(() => {
        // Return message
        res.json({
            message: `Pilote updated: ${pilote}`
        });
    });
}



