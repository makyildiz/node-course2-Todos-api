var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Todo};

//Create data
// var newTodo = new Todo({
//   text: 'Finish the course'
// });

//Save to db
// newTodo.save().then((doc) => {
//   console.log('Todo is saved', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// var otherTodo = new Todo({
//   text: 'Fill up the app form',
// });
//
// otherTodo.save().then((doc) => {
//   console.log('Todo is saved', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
