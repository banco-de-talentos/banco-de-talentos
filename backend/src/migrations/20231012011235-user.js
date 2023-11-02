'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      level: { type: Sequelize.INTEGER, allowNull: false },
      linkedin: { type: Sequelize.STRING, allowNull: false },
      github: { type: Sequelize.STRING, allowNull: false },
      telefone: { type: Sequelize.STRING, allowNull: false },
      portfolio: { type: Sequelize.STRING, allowNull: true },
      currículo: { type: Sequelize.STRING, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue:Sequelize.literal('CURRENT_TIMESTAMP()') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue:Sequelize.literal('CURRENT_TIMESTAMP()') }
    },{
      timestamps: false,
      underscored: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
