const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const TrainingA = require('../models/Trainings/TrainingA')
const TrainingB = require('../models/Trainings/TrainingB')
const TrainingC = require('../models/Trainings/TrainingC')
const TrainingD = require('../models/Trainings/TrainingD')

const connection = new Sequelize(dbConfig);

User.init(connection);
TrainingA.init(connection);
TrainingB.init(connection);
TrainingC.init(connection);
TrainingD.init(connection);

module.exports = connection;