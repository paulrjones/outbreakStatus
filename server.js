const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const { User, Post } = require('./models')

// app.get('/users', (req, res) => User.findAll()
//   .then(users => res.json(users))
//   .catch(e => console.error(e)))

// app.get('/users/:username', (req, res) => User.findOne({
//   where: {
//     email: req.params.email
//   },
//   include: [Event]
// }))

// app.post('/users', (req, res) => User.create(req.body)
//   .then(() => res.sendStatus(200))
//   .catch(e => console.error(e)))

// app.get('/posts', (req, res) => Post.findAll()
//   .then(posts => res.json(users))
//   .catch(e => console.error(e)))

// app.post('/posts', (req, res) => Post.create(req.body)
//   .then(() => res.sendStatus(200))
//   .catch(e => console.error(e)))

require('./config').sync()
  .then(() => app.listen(3000))
  .catch(e => console.error(e))
