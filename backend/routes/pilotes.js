const express = require('express');
const router = express.Router();
const piloteControl = require('../controllers/pilote');
const axios = require('axios');
const _ = require('lodash');



const pilotes = [];

router.get('/',piloteControl.findAll);
router.get('/:id',piloteControl.findOne);
router.put('/',piloteControl.addPilote);
router.delete('/:id',piloteControl.deleteOne);
/* UPDATE pilote. */
router.post('/:id', piloteControl.modifyPilote);

module.exports = router;