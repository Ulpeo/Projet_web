const express = require('express');
const router = express.Router();
const containerControl = require('../controllers/container');
const axios = require('axios');


const pilotes = [];

router.get('/',containerControl.findAll);
router.get('/:id',containerControl.findOne);
router.put('/',containerControl.addPilote);
router.delete('/:id',containerControl.deleteOne);


module.exports = router;