const res = require('express/lib/response');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');

require('dotenv').config()

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

// manejamos el inicio de sesion --> la estrategia que hace el login que valida el usuario
passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'userName',
        passwordField: 'password'
      },
      async (userName, password, done) => {
        try {
          //aqui la consulta
            console.log('Datos introducidos ===> ', userName, ' ==> ', password)//El dato si llega
            const selectUser = await  User.find({ name: `${userName}`, password: `${password}`});

            if(selectUser.length > 0){
              console.log('success: ',selectUser)
              return done(null, selectUser, { message: 'Logged in Successfully' });
            }else{
              console.log('error: ', selectUser)
              return done(null, false, { message: 'User not found or Wrong Password' });
            }

        } catch (error) {
          //console.error(error)
          return done(error);
        }

      }
    )
);

// Inicio de sesión de los usuarios (tambien registro).
/* el siguiente paso es permitir que los usuarios con tokens accedan a ciertas rutas seguras.
En este paso, verificará que los tokens no hayan sido manipulados y sean válidos.
*/
passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_WORD,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

