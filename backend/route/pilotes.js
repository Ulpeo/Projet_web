const express = require('express');
const router = express.Router();
const piloteControl = require('../controllers/pilote');
const axios = require('axios');


const pilotes = [];

router.get('/',piloteControl.findAll);
router.get('/:id',piloteControl.findOne);
router.put('/',piloteControl.addPilote);
router.delete('/:id',piloteControl.deleteOne);


module.exports = router;