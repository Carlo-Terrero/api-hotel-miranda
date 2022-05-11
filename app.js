var createError = require('http-errors');
var express = require('express');
//var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');

var loginRouter = require('./routes/routes');
var usersRouter = require('./routes/users');
var bookingsRouter = require('./routes/bookings');
const roomsRouter = require('./routes/rooms');
//const authRouter = require('./auth/auth');



require('./auth/auth');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/users', passport.authenticate('jwt', { session: false }), usersRouter);
app.use('/bookings', passport.authenticate('jwt', { session: false }), bookingsRouter);
app.use('/rooms', passport.authenticate('jwt', { session: false }), roomsRouter);
//app.use('/auth', authRouter);

//app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err)
  // render the error page
  res.status(err.status || 500);
  res.json({error: true})

});

module.exports = app;