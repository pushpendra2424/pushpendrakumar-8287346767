const express = require('express');
const logger = require("../logger/logger.js");
const helper = require("../util/helper.js");
const validator = require("../validator/farmatter.js");
const lodash = require("lodash");

const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.welcome()
    helper.date()
    helper.month()
    helper.batchInfo()
    validator.trim(" hello functionUp")
    validator.changeToLowerCase("hello")
    validator.changeToUpperCase("hello")
    let months = ['january','february','march','april','may','june','july','august','september','october','november','december']
    console.log(lodash.chunk(months,[size=4]))
    let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNumbers))
    let a = [1,2,3]
    let b = [2,3,4]
    let c = [4,5,6]
    let d = [66,3,2]
    let e = [7,6,9]
    console.log(lodash.union(a,b,c,d,e))
    let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(pairs))
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason