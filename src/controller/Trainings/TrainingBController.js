const TrainingB = require("../../models/Trainings/TrainingB");

module.exports = {
  async index(req, res) {
    const trainingB = await TrainingB.findAll();
    return res.json(trainingB);
  },
  async store(req, res) {
    const { tipo_exercicio, series, repeticoes } = req.body;

    const trainingB = await TrainingB.create({
      tipo_exercicio,
      series,
      repeticoes,
    });

    return res.json(trainingB);
  },
};
