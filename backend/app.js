var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());


app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/// cross origin hndling 
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

/// routes files 
const tasks = require('./routes/tasks');
app.use('/tasks', tasks);

// mongo db 

mongoose.connect('mongodb+srv://Manish:u5NldlSW5vLy3qjy@letstalk-nviuu.mongodb.net/TaskInformation?ssl=true&authSource=admin&retryWrites=true&w=majority',
 {useNewUrlParser: true})

app.listen(4000)
  

module.exports = app;