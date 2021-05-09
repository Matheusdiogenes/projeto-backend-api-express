const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const doctorRoutes = require('./routes/doctor.routes')
const patientRoutes = require('./routes/patient.routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('OK')
})

app.use('/doctor', doctorRoutes)
app.use('/patient', patientRoutes)

app.listen(3000)