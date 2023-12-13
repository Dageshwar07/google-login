const mongoose = require("mongoose");

const DB = 'mongodb+srv://Dageshwar07:Dagesh0712@cluster1.o9ihroc.mongodb.net/MERNGOOGLELOGIN';

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((err)=>console.log("errr",err))