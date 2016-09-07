var fs = require('fs');
var events = require('events');
//var data = { username: 'knox97', password: 'test'};
var user = new events.EventEmitter();

// checks if username and password are correct
var checkDataRegister = function(data) {
  var usr = 'knox97';
  var pw = 'test';
  // checks if user exists
  fs.exists(`./users/${data.username}.txt`, function(exists) {
    // if user EXISTS
    if (exists) {
      // user already exists
      console.log('User already Exists');
      return true;
    }
    // if user DOES NOT EXISTS
    else if (!exists) {
      console.log('User created');
      // creating user data
      var storeData = data.username + ';\n' + data.password + ';';
      // creating user file and storing data
      fs.writeFileSync(`./users/${data.username}.txt`, storeData);
    }
  });
};

user.on('register', function(data) {
  checkDataRegister(data); 
});

//user.emit('register', data);

module.exports = {
  user: checkDataRegister
};

//db