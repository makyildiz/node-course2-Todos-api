// const MongoClient = require('mongodb').MongoClient;
//Object destructuring
const {MongoClient, ObjectID} = require('mongodb'); //same w/ the upper MongoClient line

// var obj = new ObjectID();
// console.log(obj);

//Connection url
// var url = 'mongodb://localhost:27017';

//Object destructuring
// var user = {name: 'Mesut', age: 46};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to Mongodb Server');
  var db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name: 'Mesut',
  //   age: 46,
  //   location: 'Istanbul'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
