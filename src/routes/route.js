const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookcollectionController=require("../controllers/bookcollectionController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
//==========================bookcollection======================================
router.post("/createBookcollection", BookcollectionController.createBookcollection  )

router.get("/getBookcollectionsData", BookcollectionController.getBookcollectionsData)

router.get("/bookList", BookcollectionController.bookList)

router.post("/getParticularbooks", BookcollectionController.getParticularbooks)

router.post("/getAnyBooks", BookcollectionController.getAnyBooks)

router.get("/getXINRBooks", BookcollectionController.getXINRBooks)
router.get("/getRandomBooks", BookcollectionController.getRandomBooks)


module.exports = router;