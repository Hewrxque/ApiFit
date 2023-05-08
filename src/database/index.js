const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const TrainingA = require('../models/Trainings/TrainingA')

const connection = new Sequelize(dbConfig);

User.init(connection);
TrainingA.init(connection);

module.exports = connection;