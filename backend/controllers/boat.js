const mongoose = require('mongoose');
const axios = require('axios');


const Boat = require("../model/boatModel");

exports.findAll = (req, res) => {
    Boat.find({}).then((boats) => {
        // Get List of container and return JSON
        res.status(200).json({boats: boats});
    })
}

exports.findOne = (req, res) => {
    Boat.find({}).then((boats) => {
        // Get List of container and return JSON
        res.status(200).json({boats: boats});
    })
}

exports.addContainer = (req, res) => {
    Boat.find({}).then((boats) => {
        // Get List of container and return JSON
        res.status(200).json({boats: boats});
    })
}


exports.deleteOne = (req, res) => {
    // Get the :id of the container we want to delete from the params of the request
    const {id} = req.params;

    Boat.deleteOne({_id: id}).then((boats) => {
        res.status(200).json({
            boat: id,
            message: `${boats} deleted !`
        });
    }).catch(() => {
        res.status(404).json({
            message: `Boat not found !`
        });
    })
}


exports.modifyContainer = (req, res) => {
    // Get the :id of the container we want to update from the params of the request
    const {id} = req.params;
    // Get the new data of the container we want to update from the body of the request
    const {boat} = req.body;


    Boat.findByIdAndUpdate(id, {...boat}).then(() => {
        // Return message
        res.json({
            message: `Container updated: ${boat}`
        });
    });
}



