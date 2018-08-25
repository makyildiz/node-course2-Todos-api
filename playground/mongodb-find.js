// const MongoClient = require('mongodb').MongoClient;
//Object destructuring
const {MongoClient, ObjectID} = require('mongodb'); //same w/ the upper MongoClient line

// var obj = new ObjectID();
// console.log(obj);

//Connection url
var url = 'mongodb://localhost:27017';


MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to Mongodb Server');
  var db = client.db('TodoApp');

//Querying by specific property value
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

//*** Querying by _id
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b7e3b2e716df6cae15b7d38')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

// count method on cursor
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name:"Mesut"}).toArray().then((docs) => {
    console.log(`Users: `);
    console.log('-----');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });


  client.close();
});
