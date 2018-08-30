const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove everything
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({
//
// }).then()

// Todo.findOneAndRemove({_id: '5b8553692d0125de2fdea287'}).then((todo) => {
//
// });
//
// Todo.findByIdAndRemove('5b8553692d0125de2fdea287').then((todo) => {
//     console.log(todo);
// });
