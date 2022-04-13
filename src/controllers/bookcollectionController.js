const Bookcollectionmodel=require("../models/bookcollectionModel")
//================1st=============================
const createBookcollection= async function (req, res) {
    let data= req.body
    let savedData= await Bookcollectionmodel.create(data)
    res.send({msg: savedData})
}

const getBookcollectionsData= async function (req, res) {
    let allUsers= await Bookcollectionmodel.find()
    res.send({msg: allUsers})
}

//================2nd===================================
const bookList = async function (req, res) {
    
    let allUsers= await Bookcollectionmodel.find().select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allUsers})
}
//=========================3th=======================
const getParticularbooks = async function(req,res)
{
 
  let allUsers = await Bookcollectionmodel.find({year: req.body.year} )
  //let particularBooks = await BookModel.find({ year: req.body.year }) // this type isgood
  res.send(allUsers)
}
//=========================4th=======================

const getAnyBooks = async function(req,res)
{
  let year1= req.body
  let particularBooks = await Bookcollectionmodel.find(year1)
  res.send(particularBooks)
}

//=========================5th=======================

const getXINRBooks = async function(req, res)
{
  
  let XINRBooks = await Bookcollectionmodel.find( { "prices.indianPrice" : { $in: [ "100INR" , "200INR", "500INR" ] } } )
  res.send(XINRBooks)
}

//=========================6th=======================
const getRandomBooks= async function(req, res) {
  let allBooks = await Bookcollectionmodel.find({$or: [ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
  res.send({msg: allBooks })
}

// const getRandomBooks= async function(req, res) {
//     let allBooks = await Bookcollectionmodel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
//     res.send({msg: allBooks })
// }

module.exports.getRandomBooks = getRandomBooks 
module.exports.getXINRBooks= getXINRBooks
module.exports.getAnyBooks= getAnyBooks
module.exports.getParticularbooks= getParticularbooks
module.exports.bookList= bookList
module.exports.createBookcollection= createBookcollection
module.exports.getBookcollectionsData= getBookcollectionsData