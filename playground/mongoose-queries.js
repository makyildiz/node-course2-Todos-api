const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b86494b71ea64e0fb461f9c';
// var id = '5b837f35b382a6d867776e5c'; //for Todo
//
// if (!ObjectID.isValid(id)) {
//   console.log('id is invalid');
// }

//Todo.find
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('find: ', todos);
// }, (e) => {
//   console.log('Unable to fetch data', e);
// });

//Todo.findOne
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('findOne: ', todo);
// }, (e) => {
//   console.log('Unable to fetch data', e);
// });

//Todo.findById
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('findById: ',todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User: ', user);
}, (e) => {
  console.log(e);
});
