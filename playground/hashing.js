const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

//generate salt
//genSalt(number of rounds to generate the salt, callback (err, salt))
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      console.log(hash);
    });
});

hashedPassword = '$2a$10$2.TuGOjs9EVEgtGbdWdlPOnsrKdpeqGMUaJQD.PKMvY9aIUYKaQjy';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
