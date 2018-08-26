
const {MongoClient, ObjectID} = require('mongodb'); //same w/ the upper MongoClient line

var url = 'mongodb://localhost:27017';


MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to Mongodb Server');
  var db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b826fba71ea64c38993f36b")
  // },{
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5b826c915d843ad3e46a0c06')
  // },{
  //   $set: {name: 'Ilknur'},
  //   $inc: {age: -1}
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  // client.close();
});
