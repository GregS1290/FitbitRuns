const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

// auth and api routes
app.use('/auth', require('./auth'));
app.use('/api', require('./api')); // matches all requests to /api

// app.use(passport.initialize());
// app.use(passport.session());

const router = require('express').Router();
//router.use('/users', require('./users')); // matches all requests to /api/users/
//router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
//router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
