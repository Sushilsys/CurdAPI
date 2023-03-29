// app.js

var express = require('express');
var bodyParser = require('body-parser');

// Imports routes for the users
var users = require('./routes/usersroutes'); 
var app = express();


// Set up mongoose connection
var mongoose = require("mongoose");
var db_url = "mongodb://127.0.0.1/userDB";
var mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', users);


module.exports = app;