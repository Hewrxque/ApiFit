const { Model, DataTypes } = require("sequelize");

class TrainingA extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo_exercicio: DataTypes.STRING,
        series: DataTypes.INTEGER,
        repeticoes: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "trainingA", // Nome do modelo
        tableName: "trainingA", // Nome da tabela no MySQL
      }
    );
  }
}
//Treinos de peito
module.exports = TrainingA;
