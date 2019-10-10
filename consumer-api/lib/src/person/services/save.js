const { person: model } = require('../../../database/models');

const createQuery = (values) => ({ where: values });

module.exports = async (repository, values) => {
  const result = await repository.create(model, values)
  return result;
}