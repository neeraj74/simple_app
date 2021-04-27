const passport = require('passport');
const express = require('express');
var router = express.Router();

const auth = require('./auth');

// Authentication is optional for the home page
// in case user is available, display it
router.get('/', auth.optional, function (req, res) {
  
  res.render('home', {
    user: req.user 
  });
});


// Entry point when user enters facebook credentials.
router.get('/auth/facebook', passport.authenticate('facebook', {

  scope: ['public_profile', 'email']
}));

// callback url after the user is authenticated
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/error'
}));

// in case there are anhy errors
router.get('/error', auth.optional, function (req, res) {
  res.render('home');
});

module.exports = router;
