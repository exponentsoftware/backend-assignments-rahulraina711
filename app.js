const express =require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require("dotenv"); // dev dependency


dotenv.config(); // for .env variable (useless in heroku)

// connecting to mongoDB
mongoose.connect(process.env.MDB, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: true
},(err)=>{
    if (err) return console.error(err);
    console.log("----Got the API key and the Secret key----\n:::::Connected to MongoDB:::::");
});

//setting up middlewares

app.use(morgan('dev')); // dev dependency
app.use(express.urlencoded({extended:true})); // body parser for json text
app.use(express.json());
// handling cors errors
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// default domain response
app.get("/",(req, res, next)=>{
    res.status(200).json({message:"Everything is working fine here"})
});

// routes config
const todo_routes = require("./api/routes/todo_routes");

app.use("/todo", todo_routes);

module.exports = app