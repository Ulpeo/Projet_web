const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const routeUrl = require('./route/pilotes');
const cors = require('cors');
const Pilote = require('./model/piloteModel');

/*app.get('app/home/pilote',(req, res)=>{
    res.json({message:'BET'})
})*/

app.use('/app/home',require('./route/pilotes'))
app.use('app/home',require('./route/boats'))
app.use('app/home',require('./route/containers'))
app.listen(5000, () => console.log("server is up and running on port 3000"))