const User = require('./User');
const HobbyTracker = require('./HobbyTracker');

User.hasMany(HobbyTracker, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

HobbyTracker.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, HobbyTracker };