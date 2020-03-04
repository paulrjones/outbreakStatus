const router = require('express').Router()
const db = require('../config/index.js/index.js')

// GET all users
router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, users) => {
    if (err) { console.log(err) }
    res.json(users)
  })
})

// GET one user
router.get('/users/:username', (req, res) => {
  db.query(`
    SELECT users.userid, users.username, users.email, events.eventname, events.eventlocation, FROM users
    LEFT JOIN events
    ON users.email = events.email
    WHERE ?
  `, { email: req.params.email }, (err, data) => {
    if (err) { console.log(err) }
    res.json(data)
  })
})

// POST an user
router.post('/users', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// PUT an user
router.put('/users/:id', (req, res) => {
  db.query('UPDATE users SET ? WHERE ?', [req.body, { userid: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// DELETE an user
router.delete('/users/:id', (req, res) => {
  db.query('DELETE FROM users WHERE ?', { userid: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
