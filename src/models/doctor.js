const mongoose = require('../database/db')

const doctorSchema = new mongoose.Schema({
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
  specialty: {
    type: String,    
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

const Doctor = mongoose.model('doctor', doctorSchema)

module.exports = Doctor