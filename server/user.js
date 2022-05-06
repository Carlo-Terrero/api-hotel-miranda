const express = require('express');
//aqui en el ejemplo, solo llegaba hasta router y por defecto cogia las rutas (aunque solo habia una). Pero no espesificaba.
//var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var bookingsRouter = require('../routes/bookings');
const roomsRouter = require('../routes/rooms');
const authRouter = require('../auth/auth');
//const userRoutes = require('../routes/users');

const server = express();
server.use(express.json());

//server.use('/users', userRoutes);
//server.use('/', indexRouter);
server.use('/users', usersRouter);
server.use('/bookings', bookingsRouter);
server.use('/rooms', roomsRouter);
server.use('/auth', authRouter);
module.exports = server;