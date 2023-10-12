'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        notNull: true,
        primaryKey: true
      },
      nome: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      level: { type: Sequelize.INTEGER, allowNull: false },
      linkedin: { type: Sequelize.STRING, allowNull: false },
      gitHub: { type: Sequelize.STRING, allowNull: false },
      telefone: { type: Sequelize.INTEGER, allowNull: false },
      portfolio: { type: Sequelize.STRING, allowNull: true },
      currículo: { type: Sequelize.STRING, allowNull: true },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
