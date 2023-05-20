const { Model, DataTypes } = require("sequelize");

class TrainingB extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo_exercicio: DataTypes.STRING,
        series: DataTypes.INTEGER,
        repeticoes: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "trainingB", // Nome do modelo
        tableName: "trainingB", // Nome da tabela no MySQL
      }
    );
  }
}
//Treinos de Abdomen
module.exports = TrainingB;
