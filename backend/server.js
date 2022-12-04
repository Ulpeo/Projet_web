const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routeUrl = require('./route/route');
const cors = require('cors');
const Pilote = require('./model/piloteModel');

(async () => {
    try {
         await mongoose.connect('mongodb://127.0.0.1:27017/Web_Project')
            console.log("mongodb connected")


        /*const pilote = new Pilote(
            {
                Identifier:
                    "0386",
                firstName:
                    "matt",
                lastName:
                    "jojo",
                nextMission:
                    "03/12/2022",
                previousMission:
                    "03/12/2022",
                available:
                    "yes"
            }
        );
        const result = await pilote.save();
        console.log(result);*/
   } catch (error) {
        console.log(error.message);
    }
})();


app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.post('/settings', (req, res) => {
    const pilote = new Pilote({
        Identifier:req.body.Identifier,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        nextMission:req.body.nextMission,
        previousMission:req.body.previousMission,
        available:req.body.available,
    });
    pilote.save().then((pilote)=>{
        res.status(201).send(pilote);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})
app.use(cors());
app.use('/settings', routeUrl);
app.listen(3000, () => console.log("server is up and running"))