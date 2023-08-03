//requiring sequelize and 5 model files
const sequelize = require('../config/connection');
const { User, Project, Note, Material, Image} = require('../models');

//importing seed data from respective files
const userData = require('./userData.json');
const projectData = require('./projectData.json');
const noteData = require('./noteData.json');
const materialData = require('./materialData.json');
const imageData = require('./imageData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });


 //creating user records in database
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 //iterating over projects and creating records in database
  for (const project of projectData) {
    await Project.create({
      ...project,
    });
  }

//iterating over notes and creating records in database

  for (const note of noteData) {
    await Note.create ({
        ...note,
    });
  }
//iterating over materials and creating records in database
  for (const material of materialData) {
    await Material.create ({
        ...material,
    });
  }
//iterating over images and creating records in database
  for (const image of imageData) {
    await Image.create ({
        ...image,
    });
  }
  process.exit(0);
};

seedDatabase();
