const User = require('./User.js')
const Event = require('./Event.js')

User.hasMany(Event)
Event.belongsTo(User, {
  foreignKey: 'email'
})

module.exports = { User }