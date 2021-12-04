'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Notification.associate = function(models) {
    Notification.belongsTo(models.User, {
      foreignKey: 'UserId',
      as: 'user',
    });
    Notification.belongsTo(models.Post, {
      foreignKey: 'PostId',
      as: 'post'
    });
    Notification.belongsTo(models.Comment, {
      foreignKey: 'CommentId',
      as: 'comment'
    });
  };
  Notification.init({
    type: DataTypes.STRING,
    read: DataTypes.STRING,
    UserId: DataTypes.UUID,
    PostId: DataTypes.UUID,
    CommentId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};