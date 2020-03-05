const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.LOCAL_URL)

module.exports = sequelize
// STEP 1: Create a database called user_db
// STEP 2: Write your specific connection URI into the space below

module.exports = new Sequelize('mysql://root:root@localhost:3306/outbreakstatus_db')
