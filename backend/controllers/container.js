const mongoose = require('mongoose');
const axios = require('axios');


const Container = require("../model/containerModel");

exports.findAll = (req, res) => {
    Container.find({}).then((containers) => {
        // Get List of container and return JSON
        res.status(200).json({containers: containers});
    })
}

exports.findOne = (req, res) => {
    Container.find({}).then((containers) => {
        // Get List of container and return JSON
        res.status(200).json({containers: containers});
    })
}

exports.addContainer = (req, res) => {
    Container.find({}).then((containers) => {
        // Get List of container and return JSON
        res.status(200).json({containers: containers});
    })
}


exports.deleteOne = (req, res) => {
    // Get the :id of the container we want to delete from the params of the request
    const {id} = req.params;

    Container.deleteOne({_id: id}).then((container) => {
        res.status(200).json({
            container: id,
            message: `${container} deleted !`
        });
    }).catch(() => {
        res.status(404).json({
            message: `Container not found !`
        });
    })
}


exports.modifyContainer = (req, res) => {
    // Get the :id of the container we want to update from the params of the request
    const {id} = req.params;
    // Get the new data of the container we want to update from the body of the request
    const {container} = req.body;


    Container.findByIdAndUpdate(id, {...container}).then(() => {
        // Return message
        res.json({
            message: `Container updated: ${container}`
        });
    });
}



