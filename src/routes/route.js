const express = require('express');
const logger = require('./logger')

const router = express.Router();
//var x = ["hi","hi1","hi2","hi2","hi4","hi5","hi6","hi7","hi8","hi9","hi10"];
router.get('/test-me', function (req, res) {
   // let index = req.query
   // let indexvalue = x[index]
    console.log(x);
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    
    res.send('My first ever api!')
});
router.get('/movies', function(req, res){
    const arry1 =['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    res.send(arry1);
    
})
router.get('/movies/:indexNumber', function(req, res){
    const value = req.params.indexNumber
    
    const arr =['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    const arrlen = arr.length
    
    if (value < arrlen){
        res.send(arr[value])
    }
    else{
        let stat = "use a valid number."
        res.send(stat)
    }
   
});
router.get('/films', function(req, res){
    
    
   const a = [ {
         "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

 res.send(a);


});
router.get('/films/:inde', function(req, res){
    const hi = req.params.inde
    
    const x = [ {
        "id": 1,
       "name": "The Shining"
      }, {
       "id": 2,
       "name": "Incendies"
      }, {
       "id": 3,
       "name": "Rang de Basanti"
      }, {
       "id": 4,
       "name": "Finding Nemo"
      }]

    const arrle = x.length
    
    if (hi < arrle){
        res.send(x[hi])
    }
    else{
        let b = "write"
        res.send(b)
    }
    
   
});

module.exports = router;
// adding this comment for no reason