const Sequelize = require('sequelize')

<<<<<<< HEAD
// STEP 1: Create a database called user_db
// STEP 2: Write your specific connection URI into the space below

module.exports = new Sequelize('mysql://root:root@localhost:3306/outbreakstatus_db')
=======
const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.LOCAL_URL)

module.exports = sequelize
>>>>>>> b14cd823da542a73163859f6b1a857a8cf91c387
