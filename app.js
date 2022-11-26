const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./middlewares/mongodb') //to init mongoDB

const logger = require('morgan') // for seeing api calls in terminal
const cors = require('cors')
app.use(logger('dev'))
app.use(cors()) //to connect frontend and backend without any disturbance


//api

const api = require('./routes/api')
app.use('/api',api)


// Server code 
var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is connected to ${port}`)
})

//frondend connection

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/book-management')));
app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname + '/dist/book-management/index.html'));
});
