const { Model, STRING, INTEGER } = require('sequelize')

class Event extends Model { }

Event.init({
email: {
  type: STRING,
  references: {
    model: 'users',
    key: 'email',
    }
  },
eventname: {
  type: STRING,
  },
eventlocation: {
  type: STRING,
  },
eventdate: {
  type: INTEGER,
  }},

{ sequelize: require('../config'), modelName: 'event' }
  )

module.exports = Event