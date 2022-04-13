const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData