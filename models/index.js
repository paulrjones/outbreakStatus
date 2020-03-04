const User = require('./User.js')
const Post = require('./Event.js')

User.hasMany(Post)
Post.belongsTo(User)

module.exports = { User, Event }