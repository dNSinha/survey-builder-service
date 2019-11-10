var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes/index')

var db = mongoose.connect('mongodb://localhost/signupDB');//for mongo connection
var app = express();
var port = process.env.PORT || 8000;//declaring port in env>enviornemnt

app.use(bodyParser.urlencoded({ extended: true }));///for post using bodyparser
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// ///models
// var signUP = require('./model/signUpModel');//calling the model

// ///routes
// registerRouter = require('./routes/registration')(signUP);

///Initialize
app.use('/api', router);

app.listen(port, function () {
    console.log('Running on port http://localhost:' + port);
})