'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //O que essa migration irá realizar na base de dados
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
     
  },
  //O que precisa desfazer na base de dados se der erro
  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');
  
  }
};
