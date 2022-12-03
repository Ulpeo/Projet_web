const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routeUrl = require('./route/route');
const cors = require('cors');
const Pilote = require('./model/piloteModel');

/*(async () => {
    try {*/
        mongoose.connect('mongodb://127.0.0.1:27017/Web_Project',()=>  console.log("mongodb connected"))


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
   /* } catch (error) {
        console.log(error.message);
    }*/
//})();


app.use(express.json());
app.use(cors());
app.use('/app', routeUrl);
app.listen(3001, () => console.log("server is up and running"))