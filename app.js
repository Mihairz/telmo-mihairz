// PART 1
    const express = require('express');

    const app = express();

    //app.get("/", (req,res) => {
    //    //res.send("<h1>Homepage</h1>")
    //    res.render("index")
    //})

    const cookieParser = require('cookie-parser');//PART7

    // Parse URL-encoded bodies (as sent by HTML forms) PART5
    app.use(express.urlencoded({ extended: false}));
    // Parse JSON bodies (as sent by API clients) PART5
    app.use(express.json()); 

    app.use(cookieParser());//PART7 
    
    //Define Routes
    app.use('/', require('./routes/pages')); //PART5
    app.use('/auth', require('./routes/auth')); //PART5


    app.listen(x=5000, ()=> {
        console.log("Server started on port "+x);
    })


// PART 2
    const dotenv = require('dotenv'); //PART3

    dotenv.config({path:'./.env'}); //PART3

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


//PART 3
    app.set('view engine','hbs');
    
    const path = require('path');
    const publicDirectory = path.join(__dirname, 
    './public');

    app.use(express.static(publicDirectory));


//PART 4
    //app.get("/register", (req,res) => {
    //    res.render("register")
    //})


//PART 5
    // Parse URL-encoded bodies (as sent by HTML forms)
    // Parse JSON bodies (as sent by API clients)


//PART 6


//PART7
        
    
