'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define('Tenant', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phoneno: DataTypes.STRING,
    propertyid: DataTypes.INTEGER
  }, {});
  Tenant.associate = function(models) {
    // associations can be defined here
  };
  return Tenant;
};
