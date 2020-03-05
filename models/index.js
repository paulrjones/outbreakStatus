const User = require('./User.js')
const Post = require('./Event.js')

User.hasMany(Event)
Event.belongsTo(User, {
  foreignKey: email
})

module.exports = { User }