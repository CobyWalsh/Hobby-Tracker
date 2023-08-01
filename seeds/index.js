const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await users.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const project of projectData) {
      await project.create({
        ...project,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();