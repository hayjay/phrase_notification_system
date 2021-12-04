'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comment.associate = function(models) {
    Comment.hasMany(models.Notification, 
      {
        as: 'notifications', 
      }
    )
  };
  Comment.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },PostId: {
        type: DataTypes.UUID,
        references: {
          model: 'Posts',
          key: 'id'
        }
      },
    commentText: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  
  return Comment;
};