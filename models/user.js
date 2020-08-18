const Sequelize = require('sequelize');


const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: true
    },
    userName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;