'use strict';
module.exports = (sequelize, DataTypes) => {
  const Repair = sequelize.define('Repair', {
    propertyid: DataTypes.INTEGER,
    daterepaired: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Repair.associate = function(models) {
    // associations can be defined here
  };
  return Repair;
};