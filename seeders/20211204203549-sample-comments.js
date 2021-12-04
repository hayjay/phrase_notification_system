'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return await queryInterface.bulkInsert(
      "Comments",
      [
        {
          id: "a82f598e7723c68599e597b5939ad437",
          commentText: "Beautiful Picture!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "410065f8dee7354ba6fa7f5552092657",
          commentText: "Nice Post!!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return await queryInterface.bulkDelete("Comments", null, {});
  }
};
