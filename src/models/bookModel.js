const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    autherName: String,
    bookName: String,
    year:String,
    category:String,
  
}, { timestamps: true });
module.exports = mongoose.model('Book', bookSchema)