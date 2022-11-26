const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Book_Detail = new Schema({

    book_title:String,
    author:String,
    publishdate:String,
    pagecount:Number,
    details:String

})

const BookData = mongoose.model('book',Book_Detail);
module.exports = BookData;