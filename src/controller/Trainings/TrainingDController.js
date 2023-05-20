const TrainingD = require("../../models/Trainings/TrainingD");

module.exports = {
  async index(req, res) {
    const trainingD = await TrainingD.findAll();
    return res.json(trainingD);
  },
  async store(req, res) {
    const { tipo_exercicio, series, repeticoes } = req.body;

    const trainingD = await TrainingD.create({
      tipo_exercicio,
      series,
      repeticoes,
    });

    return res.json(trainingD);
  },
};
