const express = require('express');
const router = express.Router();
const boatControl = require('../controllers/boat');
const axios = require('axios');




router.get('/',boatControl.findAll);
router.get('/:id',boatControl.findOne);
router.put('/',boatControl.addBoat);
router.delete('/:id',boatControl.deleteOne);


module.exports = router;