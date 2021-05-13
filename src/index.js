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

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listen in http://localhost:${port}/`))