const mongoose = require('../database/db')

const doctorSchema = new mongoose.Schema({
  user_doctor: {
    type: String,
    require: true,
    lowercase: true,
    unique: true
  },
  user_patient: {
    type: String,
    require: true,
    lowercase: true 
  },
  createAt: {
    type: Date,
    default: Date.now
  }

})

const Doctor = mongoose.model('doctor', doctorSchema)

module.exports = Doctor