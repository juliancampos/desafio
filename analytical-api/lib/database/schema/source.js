const Mongoose = require('mongoose')

const sourceSchema = new Mongoose.Schema({
  name: String,
  value: Double
})

module.exports = Mongoose.model('source', sourceSchema);