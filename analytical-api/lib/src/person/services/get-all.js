const schema = require('../../../database/schema/person.js')

module.exports = (repository, search) => {
  return repository.get(schema, search);
}