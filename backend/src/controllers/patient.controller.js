const Patient = require('../models/patient')

module.exports = {
  register: async (req, res) => {
    try {
      const patient = Patient.create(req.body)
      return res.send( { patient } )
    } catch (error) {
      return res.status(400).send({error: 'error registration failed'})
    }
  },

  insertExercise: async (req, res) => {
    try {
      const filter = {username: req.params['username']}   
      const insertIn = await Patient.updateOne(filter, {
        $push: { exercise: req.body.exercise }
      })
      return res.send( { insertIn } )
    } catch (error) {
      return res.status(400).send({error: 'error insert failed'})
    }
  },

  deleteExercise: async (req, res) => {
    try {
      const query = {username : req.params['username']}
      const result = await Patient.findOneAndUpdate(query, {
        $pull: { exercise: { $in: req.body.exercise } }
      })      
      return res.status(400).send({result})
    } catch (error) {
      return res.status(400).send({error})
    }
  },

  showExercise: async (req, res) => {
    try {
      const result = await Patient.findOne( { username: req.params['username'] } )
      .select('exercise')            
      return res.send( { result } )
    } catch (error) {
      return res.status(400).send({error})
    }
  },
}