var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var {ObjectID} = require('mongodb');

app.use(bodyParser.json());

//********POST
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
})

//******GET
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('no valid id');
    }
    Todo.findById(id).then((todo) => {
      if (!todo) {
        res.status(404).send('id not found');
      }
      res.send({todo}); //instead of responding with arrat make it an object
    }).catch((e) => {
      res.status(400).send('problem getting id');
    });
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
