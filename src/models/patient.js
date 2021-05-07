const mongoose = require('../database/db')

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },  
  password: {
    type: String,
    require: true,
    select: false
  },
  createAt: {
    type: Date,
    default: Date.now
  }

})

const Patient = mongoose.model('patient', patientSchema)

module.exports = Patient