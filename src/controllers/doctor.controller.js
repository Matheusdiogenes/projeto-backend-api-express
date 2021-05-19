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
      const doctor = await Doctor.find({}).select(['username', 'name_d', 'specialty'])
      return res.send( { doctor } )
    } catch (error) {
      return res.status(400).send({error: 'error '})
    }
  },
  delete: async (req, res) => {
    try {
      const doctor = await Doctor.findOneAndRemove({ username: req.params['username']})
      return res.send( { status: 'deleted' } )
    } catch (error) {
      return res.status(400).send({error: 'error '})
    }
  },
}