'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "403f220c3d413fe9cb0b36142ebfb35d",
          name: "Kola .M Adewale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "cc81a8b1fceb3306997be05426b668e4",
          name: "Ajayi .O Deen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
