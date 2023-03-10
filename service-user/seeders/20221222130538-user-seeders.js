'use strict';
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('users', [
  {
       name: "farid",
       profession: "Admin Mircro",
       role: "admin",
       email: "farid123@gmail.com",
       password: await bcrypt.hash('farid123',10),
       created_at: new Date(),
       updated_at: new Date()

     }
    ]);
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('users', null, {});

  }
};
