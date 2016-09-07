var fs = require('fs');
var events = require('events');
//var error = require('./views/assets/scripts/main.js');
//var data = { username: 'knox97', password: 'test'};
var user = new events.EventEmitter();
var status = 0;

// checks if username and password are correct
var checkDataLogin = function(data) {
  // checks if user exists
  fs.exists(`./users/${data.username}.txt`, function(exists) {
    //error('test');
    // if user EXISTS
    if (exists) {
      status = 1;
      // reading user data
      var file = fs.readFileSync(`./users/${data.username}.txt`, 'utf8');
      // getting username and password
      var usr = file.match(/^.*(?=;)/g)[0].trim();
      var pw = file.match(/\n.*(?=;)/g)[0].trim();
      // if username and password are correct
      if (data.username === usr && data.password === pw) {
        console.log('[LAURA] Welcome maker, how are you today?');
        return {log: true};
      }
        
      // if something is not correct
      else
        // if password is not correct
        if (data.username === usr) {
          console.log('Wrong password!');
          return {log: false};
        }
    }
    // if user DOES NOT EXISTS
    else if (!exists) {
      status = 0;
      console.log('Wrong username or password!');
      return {log: true};
    }
  });
};

module.exports = {
  user: checkDataLogin,
  status: status
};