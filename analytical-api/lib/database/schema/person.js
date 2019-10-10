const Mongoose = require('mongoose')

const personSchema = new Mongoose.Schema({
  name: String,
  document: String,
  age: String
})

module.exports = Mongoose.model('person', personSchema);