// Import Node's built-in path module for working with directory or file paths
const path = require('path');

// Import third-party package dependencies from the npm registry
require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(
  expressSession.Store,
);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const port = process.env.PORT || 3001;

const handlebars = expressHandlebars.create({ helpers });

const session = {
  // Load the session secret from the SESSION_SECRET variable in the .env file
  secret: process.env.SESSION_SECRET,
  cookie: {
    // Set the maximum age for the cookie/session to be 24 hours
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(expressSession(session));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`\nExpress is running and listening on port ${port}.`));
});
