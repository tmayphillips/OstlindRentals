'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    hcad: DataTypes.STRING,
    insured: DataTypes.BOOLEAN,
    insuredamount: DataTypes.DECIMAL,
    tenantid: DataTypes.INTEGER,
    rent: DataTypes.DECIMAL
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};