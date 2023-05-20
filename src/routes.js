const express = require('express');
const UserController = require('./controller/UserController')
const TrainingAController = require('./controller/Trainings/TrainingAController')
const TrainingBController = require('./controller/Trainings/TrainingBController')
const TrainingCController = require('./controller/Trainings/TrainingCController')
const TrainingDController = require('./controller/Trainings/TrainingDController')

const routes = express.Router();

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/trainingA', TrainingAController.index)
routes.post('/trainingA', TrainingAController.store)

routes.get('/trainingB', TrainingBController.index)
routes.post('/trainingB', TrainingBController.store)

routes.get('/trainingC', TrainingCController.index)
routes.post('/trainingC', TrainingCController.store)

routes.get('/trainingD', TrainingDController.index)
routes.post('/trainingD', TrainingDController.store)

module.exports = routes;