// const router = require('express').Router()
// const db = require('../config/index.js/index.js')

// // GET all events
// router.get('/events', (req, res) => {
//   db.query('SELECT * FROM events', (err, events) => {
//     if (err) { console.log(err) }
//     res.json(events)
//   })
// })

// // GET one event
// router.get('/events/:eventname', (req, res) => {
//   db.query(`
//     SELECT users.wholename, users.email, event.eventname FROM users
//     LEFT JOIN events
//     ON users.email = events.email
//     WHERE ?
//   `, { email: req.params.username }, (err, data) => {
//     if (err) { console.log(err) }
//     res.json(data)
//   })
// })

// // POST an event
// router.post('/events', (req, res) => {
//   db.query('INSERT INTO events SET ?', req.body, err => {
//     if (err) { console.log(err) }
//     res.sendStatus(200)
//   })
// })

// // PUT an event
// router.put('/events/:eventname', (req, res) => {
//   db.query('UPDATE events SET ? WHERE ?', [req.body, { eventname: req.params.eventname }], err => {
//     if (err) { console.log(err) }
//     res.sendStatus(200)
//   })
// })

// // DELETE an event
// router.delete('/events/:eventname', (req, res) => {
//   db.query('DELETE FROM users WHERE ?', { userid: req.params.eventname }, err => {
//     if (err) { console.log(err) }
//     res.sendStatus(200)
//   })
// })

// module.exports = router
