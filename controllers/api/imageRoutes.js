// Import Node's built-in fs and path modules for working with files and directory or file paths
const fs = require('fs');
const path = require('path');

const gm = require('gm');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const { Image } = require('../../models');

const router = require('express').Router();

// Import lines 13-25 from https://www.digitalocean.com/community/tutorials/nodejs-uploading-files-multer-express
// and https://expressjs.com/en/resources/middleware/multer.html with additional code comments and
// changes for Hobby Tracker by Adam Hansen

// Use the multer.diskStorage() method to tell Express where to store files to the disk
const storage = multer.diskStorage({
  // TODO: Define the destination folder where multer will temporarily store uploaded files
  destination: function (req, file, callback) {
    callback(null, '/src/my-images');
  },

  filename: function (req, file, callback) {
    // Use the uuidv4 function deconstructed from the uuid package to generate a random UUID for the uploaded image name
    callback(null, uuidv4());
  },
});

const upload = multer({ storage: storage });

// End code from https://www.digitalocean.com/community/tutorials/nodejs-uploading-files-multer-express
// and https://expressjs.com/en/resources/middleware/multer.html with additional code comments and
// changes for Hobby Tracker by Adam Hansen

// TODO: Create DELETE route
// TODO: Create GET route
// TODO: Create POST Route
// TODO: Define the name of the uploaded file within the destination folder
// TODO: Use the uuid package to uniquely name the uploaded file
// TODO: Use the gm package and an installed GraphicsMagick instance to convert and resize the uploaded file
// TODO: Use Node's built-in fs and path modules to save the converted and resized file to a permanent destination folder

module.exports = router;
