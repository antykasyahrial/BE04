'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

      
  };
  Message.init({
    message_id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Message',
  });
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'UserNik',
      as: 'User',
    });
  };
  return Message;
};