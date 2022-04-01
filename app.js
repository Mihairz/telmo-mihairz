const express = require('express');
const app = express();

const dotenv = require('dotenv'); 
dotenv.config({path:'./.env'});

const path = require('path');
const publicDirectory = path.join(__dirname,'./public');
app.set('view engine','hbs');
app.use(express.static(publicDirectory));

const cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: false})); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(cookieParser());

const fileUpload = require('express-fileupload');
app.use(fileUpload());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mysql = require('mysql'); 
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error)=>{
    if(error){
        console.log(error);
    } else{
        console.log("MYSQL CONNECTED");
    }
})


//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(port=5000, ()=> {
    console.log("Server started on port "+port);
})
