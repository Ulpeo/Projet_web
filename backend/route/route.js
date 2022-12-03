const express = require('express');
const router = express.Router();
const piloteTemplateCopy = require('../model/piloteModel');
const {request, response} = require("express");


router.post('/Pilote',(req, res)=>{
   const newPilote = new piloteTemplateCopy({
       Identifier:req.body.Identifier,
       firstName:req.body.firstName,
       lastName:req.body.lastName,
       nextMission:req.body.nextMission,
       previousMission:req.body.previousMission,
       available:req.body.available,
   })
   newPilote.save()
   .then(data=>{
       response.json(data)
    })
        .catch(error =>{
            response.json(error)
        })
});

module.exports = router