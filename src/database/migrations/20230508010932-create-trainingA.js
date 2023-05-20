"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("trainingA", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tipo_exercicio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      series: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      repeticoes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },  created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("trainingA");
  },
};
