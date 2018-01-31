// Invocar modo 'strict' de JavaScript
'use strict'

// Cargar el modelo Mongoose 'User'
var User = require('mongoose').model('User');

// Crear un nuevo método controller 'create'
exports.create = function(req, res, next) {
  // Crear una nueva instancia del model Mongoose 'User'
  var user = new User(req.body);
  // Usar el método 'save' de la instancia 'User' para salvar un nuevo documento user
  user.save(function(err) {
    if (err) {
      // Llamar al siguiente middleware con un mensaje de error
      return next(err);
    } else {
      // Usar el objeto 'response' para enviar una respuesta JSON
      res.json(user);
    }
  });
};

// Crear un nuevo método controller 'list'
exports.list = function(req, res, next) {
  // Usa el método static 'User' 'find' para recuperar la lista de usuarios
  User.find({}, function(err, users) {
    if (err){
      // llama al siguiente middleware con un mensaje de error
      return next(err);
    } else {
      // Usa el obheto 'response' para enviar una resppuesta JSON
      res.json(users);
    }
  });
};
