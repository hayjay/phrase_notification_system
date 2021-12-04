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
      "Posts",
      [
        {
          id: "b1638f970c3ddd528671df76c4dcf13e",
          title: "Happy Birthday!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7d78ff348647b782cb3027d836d23e09",
          title: "Good morning, it's December!!!",
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
     return await queryInterface.bulkDelete("Posts", null, {});
  }
};
