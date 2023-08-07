// Import Node's built-in fs and path modules for working with files and directory or file paths
const fs = require('fs');
const path = require('path');
const express = require('express');

// Import third-party package dependencies from the npm registry
require('dotenv').config();
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session');
// const gm = require('gm');
const multer = require('multer');
const SequelizeStore = require('connect-session-sequelize')(
  expressSession.Store,
);
const uuid = require('uuid');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const port = process.env.PORT || 3001;

const handlebars = expressHandlebars.create({ helpers });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

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

// Import lines 47-66 from https://www.digitalocean.com/community/tutorials/nodejs-uploading-files-multer-express
// and https://expressjs.com/en/resources/middleware/multer.html with additional code comments and
// changes for Hobby Tracker by Adam Hansen

// Use the multer.diskStorage() method to tell Express where to store files to the disk
const storage = multer.diskStorage({
  // TODO: Define the destination folder where multer will temporarily store uploaded files
  destination: function (req, file, callback) {
    callback(null, '/src/my-images');
  },
  // TODO: Define the name of the uploaded file within the destination folder
  // TODO: Use the uuid package to uniquely name the uploaded file
  // TODO: Use the gm package and an installed GraphicsMagick instance to convert and resize the uploaded file
  // TODO: Use Node's built-in fs and path modules to save the converted and resized file to a permanent destination folder
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  },
});

const upload = multer({ storage: storage });

// End code from https://www.digitalocean.com/community/tutorials/nodejs-uploading-files-multer-express
// and https://expressjs.com/en/resources/middleware/multer.html with additional code comments and
// changes for Hobby Tracker by Adam Hansen

app.use(expressSession(session));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log('Now listening'));
});


