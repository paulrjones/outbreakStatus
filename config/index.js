const Sequelize = require('sequelize')

// STEP 1: Create a database called user_db
// STEP 2: Write your specific connection URI into the space below

module.exports = new Sequelize('mysql://root:root@localhost:3306/user_db')
