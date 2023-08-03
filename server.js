// Import Node's built-in fs and path modules for working with files and directory or file paths
const fs = require('fs');
const path = require('path');

// Import third-party package dependencies from the npm registry
require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session');
const gm = require('gm');
const multer = require('multer');
const uuid = require('uuid');

const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const handlebars = expressHandlebars.create({ helpers });

const session = {
  // Load the session secret from the SESSION_SECRET variable in the .env file
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(expressSession(session));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
