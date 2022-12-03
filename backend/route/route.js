const express = require('express');
const router = express.Router();
const piloteTemplate = require('../model/piloteModel');
const {request, response} = require("express");


router.post('/Pilote',(req, res)=>{
   const newPilote = new piloteTemplate({
       Identifier:request.body.Identifier,
       firstName:request.body.firstName,
       lastName:request.body.lastName,
       nextMission:request.body.nextMission,
       previousMission:request.body.previousMission,
       available:request.body.available,
   });
   newPilote.save()
   .then(data=>{
       response.json(data)
    })
        .catch(error =>{
            response.json(error)
        })
});

module.exports = router