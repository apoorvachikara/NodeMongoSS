var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient

const MONGO_URL = "mongodb://nitank:dnh9566@ds259175.mlab.com:59175/devdoit";
   

router.get('/' ,function(req, res, next) {
    mongoClient.connect(MONGO_URL, function(err, db) {
        if (err) console.log(err);
        var dbo = db.db('devdoit');
        dbo.collection('SubStatus').find({}).toArray((err, docs)=> {
            if(err) {
                console.log(err);
                res.status(500).json({
                    message: error
                }) ;
            }
            res.status(200).json(docs);
        })
      });
});




module.exports = router;