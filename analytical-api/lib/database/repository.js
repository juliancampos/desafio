const config = require('config');
const urlConnection = config.get('database.connection');

const Mongoose = require('mongoose')
// const mongoose = Mongoose.connection

const db = {
  get,
  save, 
}

async function get(model, searchParam) {
  return await model.find(searchParam);
}

async function save(model) {
  return await model.save();
}

module.exports = function factory() {
  Mongoose.connect(urlConnection);
  return db
}