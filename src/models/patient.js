const mongoose = require('../database/db')

const patientSchema = new mongoose.Schema({
  name_p: {
    type: String,
    require: true
  },
  username: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
    trim: true
  },  
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },  
  cpf: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },
  exercise: {
    type: [{type: String}]
  },
  password: {
    type: String,
    require: true    
  },
  createAt: {
    type: Date,
    default: Date.now
  }

})

const Patient = mongoose.model('patient', patientSchema)

module.exports = Patient