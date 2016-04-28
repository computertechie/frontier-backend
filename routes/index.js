var express = require('express');
var router = express.Router();
var Parser = require('../lib/parser');
var database = require('frontier-database')();
var collections = database.collections;

router.post('/post', function(req, res, next){
    console.log(req.body);
    var readings = Parser.parseData(req.body.readings);
    var timestamp = Date.now();
    for(var i = 0; i < readings.length; i++){
        var data = {
            sensor: readings[i].sensor,
            value: readings[i].value,
            timestamp: timestamp
        };

        console.log(data);
        new collections.Reading(data).save(function(err, doc){
            if(err) console.log(err);
            if(doc) console.log(doc);
        })
    }
    res.end();
});


module.exports = router;