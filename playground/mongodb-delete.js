
const {MongoClient, ObjectID} = require('mongodb'); //same w/ the upper MongoClient line

var url = 'mongodb://localhost:27017';


MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to Mongodb Server');
  var db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Mesut'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Study nodejs'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete (returns the deleted document)
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b826c494c6cbdd3e394dc4f')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });



  // client.close();
});
