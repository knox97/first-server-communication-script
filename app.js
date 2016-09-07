var express = require('express');
var bodyParser = require('body-parser');
var login = require('./login_system');
var register = require('./register_system');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
app.set('view engine', 'ejs');
app.use('/', express.static('views'));

app.get('/', function(req, res) {
  //console.log(req.query);
  res.render('index');
});

app.post('/log', urlencodedParser, function(req, res) {
  var data = req.body;
  console.log(login.user(data));
  res.json(data);
  
});

app.post('/reg', urlencodedParser, function(req, res) {
  var data = req.body;
  register.user(data);
  res.json(data);
});

app.get('/home/:user', function(req, res) {
  var data = {username: req.params.user};
  console.log(data);
  res.render('home', {data: data});
});

app.listen(3535);

//var data = { username: 'knox97', password: 'test'};
//login.user.emit('login', data);