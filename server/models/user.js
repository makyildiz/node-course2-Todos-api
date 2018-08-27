var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1

  }
});

module.exports = {User};

// var user = new User({
//   name: 'Baha',
//   email: 'baha@g.com'
// })
//
// user.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// },(e) => {
//   console.log('Unable to save user', e);
// });
