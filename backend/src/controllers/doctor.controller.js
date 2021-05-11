const Doctor = require('../models/doctor')

module.exports = {
  register: async (req, res) => {
    try {
      const doctor = await Doctor.create(req.body)
      return res.send( { doctor } )
    } catch (error) {
      return res.status(400).send({error: 'error registration failed'})
    }
  },

  show: async (req, res) => {
    try {
      const doctor = await Doctor.find({}).select(['name', 'specialty'])
      return res.send( { doctor } )
    } catch (error) {
      return res.status(400).send({error: 'error registration failed'})
    }
  },
}