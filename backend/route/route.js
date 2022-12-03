const express = require('express');
const router = express.Router();
const piloteTemplate = require('../model/piloteModel');
const {request, response} = require("express");


router.post('/pilote',(req, res)=>{
   const newPilote = new piloteTemplate({
       Identifier:request.body.Identifier,
       firstName:request.body.firstName,
       lastName:request.body.lastName,
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