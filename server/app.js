const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();



const cookieParser = require("cookie-parser");
app.use(cookieParser ());



dotenv.config({ path: './config.env' });
require('./db/conn');



// dotenv.config({ path: './config.env' });
// require('./db/orderconn');
// const User = require('./model/userSchema')


app.use(express.json());

// we link the router files to make our route esay
app.use(require('./router/auth'));
app.use(require('./router/order'));
app.use(require('./router/orders'));



// step:2 Heroku

const PORT = process.env.PORT || 5000;





// app.get('/About', middleware, (req, res) => {
//     console.log('Hello my About');
//     res.send('hii farid this is about page')
// })

// app.get('/Contact', (req, res) => {
//     // res.cookie("Test", 'thapa');
//     res.send('hii farid this is Contact page')
// });

// app.get('/Signin', (req, res) => {
//     res.send('hii farid this is Signin page')
// })

app.get('/Signup', (req, res) => {
    res.send('hii farid this is Signup page')
})

app.get('/products/Cart/Delivery', (req, res) => {
    res.send('hii farid this is delivery page')
})

app.get('/products/Cart', (req, res) => {
    res.send('hii this is order page');
})


// step :3 heroku



if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

}

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})
