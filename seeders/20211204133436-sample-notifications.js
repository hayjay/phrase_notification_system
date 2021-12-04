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
      "Notifications",
      [
        {
          UserId: "403f220c3d413fe9cb0b36142ebfb35d",
          PostId: "b1638f970c3ddd528671df76c4dcf13e",
          type: "Like",
          read: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: "cc81a8b1fceb3306997be05426b668e4",
          PostId: "7d78ff348647b782cb3027d836d23e09",
          CommentId: "a82f598e7723c68599e597b5939ad437",
          type: "Comment",
          read: false,
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
     return await queryInterface.bulkDelete("Notifications", null, {});
  }
};
