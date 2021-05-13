const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/projetodb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise

module.exports = mongoose