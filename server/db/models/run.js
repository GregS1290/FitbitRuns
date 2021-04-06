const Sequelize = require('sequelize');
const db = require('../db');

const Run = db.define('run', {
  startDate: {
    type: Sequelize.DATE,
  },
  distance: {
    type: Sequelize.FLOAT,
  },
  duration: {
    type: Sequelize.FLOAT,
  },
  calories: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Run;
