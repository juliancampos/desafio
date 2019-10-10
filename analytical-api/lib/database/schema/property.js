const Mongoose = require('mongoose')

const propertySchema = new Mongoose.Schema({
  name: String,
  value: Double
})

module.exports = Mongoose.model('property', propertySchema);