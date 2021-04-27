const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

passport.serializeUser(function (user, cb){
    cb(null, user);
});
  
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});


passport.use(new FacebookStrategy({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: process.env.FB_CALLBACK_URL,
    profileFields: ["email", "name", "displayName"]
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
    }
));