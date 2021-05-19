const express = require('express')
const doctor = require('../controllers/doctor.controller')
const app = express()

app.post('/register', doctor.register)
app.get('/show', doctor.show)
app.delete('/delete/:username', doctor.delete)

module.exports = app