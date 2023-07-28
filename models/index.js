const User = require('./User');
const Hobbist = require('./Hobbist');

User.hasMany(Hobbist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Hobbist.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Hobbist };