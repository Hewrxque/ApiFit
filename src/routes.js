const express = require('express');
const UserController = require('./controller/UserController')
const TrainingAController = require('./controller/Trainings/TrainingAController')

const routes = express.Router();

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/trainingA', TrainingAController.index)
routes.post('/trainingA', TrainingAController.store)

module.exports = routes;