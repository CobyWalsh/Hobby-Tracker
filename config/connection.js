const { Sequelize } = require('sequelize');
require('dotenv').config();

// Import logic contained in lines 5-25 from https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql
// with additional code comments, variable name adjustments, and hostname changes for Hobby Tracker by Adam Hansen
let sequelize;

// Check if the app is deployed on Heroku using JawsDB MySQL 
if (process.env.JAWSDB_URL) {
  // Access Heroku's process.env.JAWSDB_URL variable and use that value to connect to JawsDB MySQL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Access process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD from the .env file on the development computer
  // Use the variable values to connect to MySQL on the development computer
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      // Prevent connection problems on development computers running Windows and use the IP address of 127.0.0.1 instead of the hostname localhost
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// End code from https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql

module.exports = sequelize;
