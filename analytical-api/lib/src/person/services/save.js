const schema = require('../../../database/schema/person.js')

module.exports = (repository, body) => {
  return repository.save(new schema(body));
}