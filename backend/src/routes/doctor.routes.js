const express = require('express')
const doctor = require('../controllers/doctor.controller')
const app = express()

app.post('/register', (req, res) => {
  res.send('doctor register')
})
app.get('/show', (req, res) => {
  res.send('show doctors')
})

module.exports = app