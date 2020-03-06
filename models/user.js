const { Model, STRING, INTEGER, BOOLEAN } = require('sequelize')
const sequelize = require('../config')

class User extends Model { }

User.init({
  email: {
    type: STRING,
    unique: true,
  },
  wholename: {
    type: STRING
  },
  gender: {
    type: STRING
  },
  age_range: {
    type: INTEGER
  },
  country: {
    type: STRING
  },
  emailList: {
    type: BOOLEAN
  }},
  // { sequelize: require('../config'), modelName: 'user' } 
   { sequelize, modelName: 'user' } 
  )

module.exports = User

