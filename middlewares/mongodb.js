const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Amal2910:Learn123@cluster0.sccoifa.mongodb.net/Library?retryWrites=true&w=majority',


{
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})