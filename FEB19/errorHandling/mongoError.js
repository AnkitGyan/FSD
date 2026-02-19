const promise = require('promise');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost/TestDB';

MongoClient.connect(url)
   .then(function(err, db){
    db.collection('Test').updateOne({name: 'John'}, {$set: {age: 30}})
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })  
   })

    .catch(function(err){
        console.log(err);
    })  