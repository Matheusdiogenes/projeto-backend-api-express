const express = require('express')

const app = express()
const doctorRoutes = require('./routes/doctor.routes')
const patientRoutes = require('./routes/patient.routes')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('OK')
})

app.use('/doctor', doctorRoutes)
app.use('/patient', patientRoutes)

app.listen(3000)