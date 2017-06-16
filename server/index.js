const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');

const router = require('./router.js');

const app = express();

app.use(cookieParser('sessiontest'));
app.use(session({
	secret: 'sessiontest',
  cookie: { maxAge: 1 * 60 * 60 * 1000 }, //默认1小时
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../assets')));

app.use(logger('dev'));

// 解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/',router);

app.use(function(req,res){
  res.status(404).send('404 - Not Found!');
});

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).send('500 - Server Error!');
});

app.listen('3001',function() {
  console.log('server started at:http://localhost:3001');
})