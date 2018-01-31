var config = require('./config'),
  session = require('express-session'),
  express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

//Definir el método de configuración de Express
module.exports = function() {
  // Crear una nueva instancia de la aplicación Express
  var app = express();

  // Usar la variable 'NODE_ENV' para activar los middleware 'morgan' logger o 'compress'
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  // Usar las funciones middleware 'body-parser' y 'method-override'
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Configuración del middleware 'session'
  app.use(session({saveUninitialized: true, resave: true, secret: config.sessionSecret}));

  // Configurar el motor view de la aplicación y el directorio 'views'
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Cargar los archivos de enrutamiento
  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/users.server.routes.js')(app);

  // Configurar el servidor de archivos estáticos
  app.use(express.static('./public'));

  // Devolver la instancia de la aplicación Express
  return app;
};
