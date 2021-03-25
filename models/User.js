'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nik : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function(models) {
  
    User.hasMany(models.Message, {
      as: 'Messages'
    });
  };

  return User;
};