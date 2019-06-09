const express = require('express');
const router = express.Router();
const Suresh = require('../models/mongodb');


// get a list of suresh from the db
router.get('/suresh', function(req, res, next) {
   res.send({type: 'GET'});
});

//add a new suresh to the db
router.post('/suresh', function(req, res, next) {
    Suresh.create(req.body).then(function(suresh){
        res.send(suresh);
    }).catch(next);
    
 });

 //update a suresh in the db
 router.put('/suresh/:id', function(req, res,  next) {
     Suresh.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(suresh){
        Suresh.findOne({_id: req.params.id}).then(function(suresh){
            res.send(suresh);   
        })

     });
 });

 //delete a suresh from the db
 router.delete('/suresh/:id', function(req, res, next) {
     Suresh.findByIdAndRemove({_id: req.params.id}).then(function(suresh){
        res.send(suresh); 
     })
 });

 module.exports = router;