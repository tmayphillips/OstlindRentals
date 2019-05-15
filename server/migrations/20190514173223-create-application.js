'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      dl: {
        type: Sequelize.STRING
      },
      dlstate: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.STRING
      },
      cofirstname: {
        type: Sequelize.STRING
      },
      colastname: {
        type: Sequelize.STRING
      },
      codl: {
        type: Sequelize.STRING
      },
      codlstate: {
        type: Sequelize.STRING
      },
      cossn: {
        type: Sequelize.STRING
      },
      otherresidents: {
        type: Sequelize.STRING
      },
      currentincome: {
        type: Sequelize.STRING
      },
      currenthouseholdincome: {
        type: Sequelize.STRING
      },
      currentpayment: {
        type: Sequelize.STRING
      },
      employer: {
        type: Sequelize.STRING
      },
      supervisor: {
        type: Sequelize.STRING
      },
      supervisorphoneno: {
        type: Sequelize.STRING
      },
      verifymethod: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Applications');
  }
};