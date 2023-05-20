const { Model, DataTypes } = require("sequelize");

class TrainingC extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo_exercicio: DataTypes.STRING,
        series: DataTypes.INTEGER,
        repeticoes: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "trainingC", // Nome do modelo
        tableName: "trainingC", // Nome da tabela no MySQL
      }
    );
  }
}
//Treinos de perna
module.exports = TrainingC;
