const Image = require('./image.js');
const Material = require('./material.js');
const Note = require('./note.js');
const Project = require('./project.js');
const User = require('./user.js');

User.hasMany(Project, {
  foreignKey: 'fk_user',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'fk_user'
});

module.exports = { Image, Material, Note, Project, User };
