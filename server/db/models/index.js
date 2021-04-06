const db = require('../db');
const User = require('./user');
const Run = require('./run');

User.hasMany(Run);
Run.belongsTo(User);

module.exports = {
  db,
  User,
  Run,
};
