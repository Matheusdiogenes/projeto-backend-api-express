const express = require('express')
const patient = require('../controllers/patient.controller')
const app = express()


app.post('/register', patient.register)

app.put('/insert/exercise/:username', patient.insertExercise)

app.get('/show/exercise/:username', patient.showExercise)

app.put('/update/exercise/:username', patient.deleteExercise)

app.get('/show', patient.show)

app.delete('/delete/:username', patient.delete)

module.exports = app