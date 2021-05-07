const express = require('express')
const doctor = require('../controllers/doctor.controller')
const app = express()


app.post('/register', (req, res) => {
  res.send('patient register')
})

app.post('/insert/exercise/:patient/:arrExercise', (req, res) => {
  res.send('insert exercises')
})

app.get('/show/exercise/:patient', (req, res) => {
  res.send('insert exercises')
})

app.put('/update/exercise/:patient/:index', (req, res) => {
  res.send('update exercises')
})

app.delete('/delete/exercise/:patient/:index', (req, res) => {
  res.send('delete exercises')
})

module.exports = app