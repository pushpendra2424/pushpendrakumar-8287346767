const mongoose = require('mongoose');

const bookcollectionSchema = new mongoose.Schema( {
    
    bookName:  {
        type: String,
        required: true
    },
    authorName: String, 
    tags: [String],
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages:String,
    year: {type: String, default: 2021},
    stockAvailable: Boolean,

}, { timestamps: true });


module.exports = mongoose.model('Bookcollection', bookcollectionSchema) 



// String, Number
// Boolean, Object/json, array