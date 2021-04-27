
const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
var path = require('path');
require('./controllers/passport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes/routes.js');

app.use('/', routes);

const port = 3000;

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
