'use strict'

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');

const loginRouter = require('./routes/routes');
const usersRouter = require('./routes/users');
const bookingsRouter = require('./routes/bookings');
const roomsRouter = require('./routes/rooms');
const contactRouter = require('./routes/contact');
const messageRouter = require('./routes/message');


//Hacemos la conexion a la BBDD
require('./connection/connectionDB');

require('./auth/auth');

const app = express();
//const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//Con este bloque y con (authorization) en la linea 41 arreglamos los problemas de CORDS de la authentication
app.use((req, res, next) => {
  if(req.method === 'OPTIONS'){
    return res.end();
  }else{
    next()
  }
});

/* app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
}) */

app.use('/', loginRouter);
app.use('/users', passport.authenticate('jwt', { session: false }), usersRouter);
app.use('/bookings', passport.authenticate('jwt', { session: false }), bookingsRouter);
app.use('/rooms', passport.authenticate('jwt', { session: false }), roomsRouter);
app.use('/contact', passport.authenticate('jwt', { session: false }), contactRouter);
app.use('/messages', passport.authenticate('jwt', { session: false }), messageRouter);
//app.use('/auth', authRouter);

//rutas para que la web pueda hacer reserva, la idea es que esto se reemplace por un token temporal


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({error: err.message})

});

module.exports = app;