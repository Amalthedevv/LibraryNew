const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Signup_Details= new Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
})

const SignupData = mongoose.model('signup',Signup_Details);
module.exports = SignupData;