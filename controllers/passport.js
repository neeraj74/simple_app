const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();


// Simplest form of using FacebookStrategy
// Pleas check other options on this strategy
passport.use(new FacebookStrategy({

    // appId created on facebook site
    clientID: process.env.FB_CLIENT_ID,

    // secret for the app
    clientSecret: process.env.FB_CLIENT_SECRET,

    // callback url
    callbackURL: process.env.FB_CALLBACK_URL,

    // facebook has a lot of information about the user
    // we can indicate the fields needed here
    profileFields: ["email", "name", "displayName"]

}, function (accessToken, refreshToken, profile, done) {
    
    // from profile._json will have all the fields requested
    // This is the place to extract them and save them locally.
    return done(null, profile);
    }
));

passport.serializeUser(function (user, cb){
    cb(null, user);
});
  
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});