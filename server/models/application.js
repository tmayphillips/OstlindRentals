'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dl: DataTypes.STRING,
    dlstate: DataTypes.STRING,
    ssn: DataTypes.STRING,
    cofirstname: DataTypes.STRING,
    colastname: DataTypes.STRING,
    codl: DataTypes.STRING,
    codlstate: DataTypes.STRING,
    cossn: DataTypes.STRING,
    otherresidents: DataTypes.STRING,
    currentincome: DataTypes.STRING,
    currenthouseholdincome: DataTypes.STRING,
    currentpayment: DataTypes.STRING,
    employer: DataTypes.STRING,
    supervisor: DataTypes.STRING,
    supervisorphoneno: DataTypes.STRING,
    verifymethod: DataTypes.STRING
  }, {});
  Application.associate = function(models) {
    // associations can be defined here
  };
  return Application;
};