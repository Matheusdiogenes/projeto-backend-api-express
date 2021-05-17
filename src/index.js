const express = require('express')
const cors = require('cors')
const app = express()
const doctorRoutes = require('./routes/doctor.routes')
const patientRoutes = require('./routes/patient.routes')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  const response = 'projeto database'
  res.status(200).json({response})
})

app.use('/doctor', doctorRoutes)
app.use('/patient', patientRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listen in http://localhost:${port}/`))