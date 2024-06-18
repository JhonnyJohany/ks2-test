'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const users = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@test.org' },
  { name: 'Michael Johnson', email: 'michael.johnson@company.net' },
  { name: 'Emily Davis', email: 'emily.davis@example.com' },
  { name: 'David Wilson', email: 'david.wilson@test.org' },
  { name: 'Sarah Anderson', email: 'sarah.anderson@company.net' },
  { name: 'William Brown', email: 'william.brown@example.com' },
  { name: 'Olivia Miller', email: 'olivia.miller@test.org' },
  { name: 'Christopher Lee', email: 'christopher.lee@company.net' },
  { name: 'Isabella Gonzalez', email: 'isabella.gonzalez@example.com' },
  { name: 'Alexander Hernandez', email: 'alexander.hernandez@test.org' },
  { name: 'Sophia Ramirez', email: 'sophia.ramirez@company.net' },
  { name: 'Daniel Diaz', email: 'daniel.diaz@example.com' },
  { name: 'Mia Torres', email: 'mia.torres@test.org' },
  { name: 'Jacob Flores', email: 'jacob.flores@company.net' },
  { name: 'Avery Morales', email: 'avery.morales@example.com' },
  { name: 'Lucas Gutierrez', email: 'lucas.gutierrez@test.org' },
  { name: 'Ava Reyes', email: 'ava.reyes@company.net' },
  { name: 'Noah Castillo', email: 'noah.castillo@example.com' },
  { name: 'Isabella Jimenez', email: 'isabella.jimenez@test.org' }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });

    // Insertar los datos en la tabla users del esquema ks2
    await queryInterface.bulkInsert('users', users.map(user => ({
      name: user.name,
      email: user.email,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};