const TrainingB = require("../../models/Trainings/TrainingC");

module.exports = {
  async index(req, res) {
    const trainingC = await TrainingB.findAll();
    return res.json(trainingC);
  },
  async store(req, res) {
    const { tipo_exercicio, series, repeticoes } = req.body;

    const trainingC = await TrainingB.create({
      tipo_exercicio,
      series,
      repeticoes,
    });

    return res.json(trainingC);
  },
};
