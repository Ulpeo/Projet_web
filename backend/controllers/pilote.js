const mongoose = require('mongoose');
const axios = require('axios');

const Pilotes = require('../model/piloteModel');


exports.findAll = (req, res) => {
    Pilotes.find({}).then((pilotes) => {
        // Get List of movie and return JSON
        res.status(200).json({pilotes: pilotes});
    })
}

exports.findOne = (req, res) => {
    const {id} = req.params;

    // Find movie which has [id] name in DB
    Pilotes.findOne({pilote: id})
        .then(pilote => {
            if (pilote) {
                // Return movie
                res.status(200).json({
                    message: 'pilote found!',
                    pilote
                });
            } else {
                res.status(404).json({
                    message: `pilote ${id} not found!`
                });
            }
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Pilote not found with id' + req.params.piloteId
                });
            }

            return res.status(500).send({
                message: 'Error retrieving pilote with id' + req.params.piloteId
            });
        })
}

exports.addPilote = (req, res) => {
    const {pilote} = req.body;
    const url = 'http://localhost:3000/';

    //request for a pilote
    axios.get(url)
        .then((data) => {
            if (data.data) {
                const {Identifier, firstName, lastName, nextMission, previousMission, available} = data.data;
                const newPilote = {
                    // _id: _.uniqueId(), // Fait par Mongodb
                    Identifier: 'Identifier',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    nextMission: '15/12/2022', //date
                    previousMission: '15/12/2022', //date
                    available: 'yes',

                }
                Pilotes.create(newPilote).then(pilote => {
                    console.error(pilote);
                    if (pilote) {
                        // Return validation message
                        res.status(200).json({
                            message: `Just added ${firstName}`,
                            pilote: {pilote},
                        });
                    }
                }).catch(error => {
                    res.status(404).json({
                        theerror: error,
                    });
                });
            } else {
                res.status(404).json({
                    message: `Pilote not found`
                });
            }
        }).catch(function (error) {
        // handle error
        res.json({
            error,
            pilote: Pilotes
        });
    });
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


exports.modifyPilote = (req, res) => {
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



