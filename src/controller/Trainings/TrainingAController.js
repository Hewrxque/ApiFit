const TrainingA = require("../../models/Trainings/TrainingA");

module.exports = {
  async index(req, res) {
    const trainingA = await TrainingA.findAll();
    return res.json(trainingA);
  },
  async store(req, res) {
    const { tipo_exercicio, series, repeticoes } = req.body;

    const trainingA = await TrainingA.create({
      tipo_exercicio,
      series,
      repeticoes,
    });

    return res.json(trainingA);
  },
};
