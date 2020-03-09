const User = require('./user.js')
const Event = require('./event.js')

User.hasMany(Event)
Event.belongsTo(User, {
  foreignKey: 'email'
})

module.exports = { User }