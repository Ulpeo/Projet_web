const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routeUrl = require('./route/route');
const cors = require('cors');



mongoose.connect('mongodb://127.0.0.1:27017/Web_Project')
    .then(()=>{
        console.log("mongodb connected");
    });

app.use(express.json());
app.use(cors());
app.use('/app',routeUrl);
app.listen(3000,()=>console.log("server is up and running"))