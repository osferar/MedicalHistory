process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(3003);
module.exports = app;

console.log('Servidor ejecutandose en http://localhost:3003/');
