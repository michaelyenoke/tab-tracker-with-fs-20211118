const Sequelize = require('sequelize')
const sequelize = require('./index')


const User = sequelize.define('user', {
    email: {
      type: Sequelize.STRING,
      unique:true
    },
    password: {
      type: Sequelize.STRING
    }
  })

module.exports = User