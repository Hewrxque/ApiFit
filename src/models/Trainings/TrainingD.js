const { Model, DataTypes } = require("sequelize");

class TrainingD extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo_exercicio: DataTypes.STRING,
        series: DataTypes.INTEGER,
        repeticoes: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "trainingD", // Nome do modelo
        tableName: "trainingD", // Nome da tabela no MySQL
      }
    );
  }
}
//Treinos de peito
module.exports = TrainingD;
