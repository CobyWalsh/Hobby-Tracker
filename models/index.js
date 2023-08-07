const User = require('./user.js');
const Project = require('./project.js');
const Material = require('./material.js');
const Image = require('./image.js');
const Note = require('./note.js');

User.hasMany(Project, {
  foreignKey: 'fk_user',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'fk_user',
});

Project.hasMany(Note, {
  foreignKey: 'fk_project',
  onDelete: 'CASCADE',
});

Note.belongsTo(Project, {
  foreignKey: 'fk_project',
});

Project.hasMany(Image, {
  foreignKey: 'fk_project',
  onDelete: 'CASCADE',
});

Image.belongsTo(Project, {
  foreignKey: 'fk_project',
});

Material.hasMany(Image, {
  foreignKey: 'fk_material',
});

Image.belongsTo(Material, {
  foreignKey: 'fk_material',
});

Material.hasMany(Note, {
  foreignKey: 'fk_material',
  onDelete: 'CASCADE',
});

Note.belongsTo(Material, {
  foreignKey: 'fk_material',
});

module.exports = { Image, Material, Note, Project, User };
