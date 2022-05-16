const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

//const connection = require('../DBConnections/mySQL_conection');

//const user = {userName: 'ponko', pass: '1234'};

//porque va por post?
//manejo de una solicitud POST para login aqui tengo que manejarlo para que funcione

router.post(
  '/login',
  async (req, res, next) => {
    console.log(req.body)

    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
              console.error(err, user) 
            const error = new Error('An error occurred.');

            return next(error);
          }

          //console.log(req.body)
          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);
              
              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, process.env.SECRET_WORD);
              return res.json({ token });
            }
          );

        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);
  
module.exports = router;