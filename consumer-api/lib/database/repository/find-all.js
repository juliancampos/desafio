async function findAll(model, include) {
  try {
    return await model.findAll(include).then(async entity => entity.map(data => data.dataValues));
  } catch (error) {
    return error.message;
  }
}

module.exports = findAll;
