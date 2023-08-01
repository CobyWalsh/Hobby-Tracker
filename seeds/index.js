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

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const project of projectData) {
      await Project.create({
        ...project,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();
