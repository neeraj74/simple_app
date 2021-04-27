const passport = require('passport');
const express = require('express');
var router = express.Router();

const auth = require('./auth');

router.get('/', auth.optional, function (req, res) {
  console.log("user = ", req.user);
  res.render('home', {
    user: req.user // get the user out of session and pass to template
  });
});

router.get('/error', auth.optional, function (req, res) {
  res.render('home');
});

router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/error'
  }));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
