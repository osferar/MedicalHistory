process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();
app.listen(3003);
module.exports = app;

console.log('Servidor ejecutandose en http://localhost:3003/');

/** Esto es una prueba commit*/
var=23;
