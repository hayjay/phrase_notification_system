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
      "UserPosts",
      [
        {
          id: "7d78ff348647b782cb3027d836d23e09",
          user_id: "403f220c3d413fe9cb0b36142ebfb35d",
          post_id: "b1638f970c3ddd528671df76c4dcf13e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ac487e5866d80dfcb77a89f55d2b0055",
          user_id: "cc81a8b1fceb3306997be05426b668e4",
          post_id: "7d78ff348647b782cb3027d836d23e09",
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
     return await queryInterface.bulkDelete("UserPosts", null, {});
  }
};
