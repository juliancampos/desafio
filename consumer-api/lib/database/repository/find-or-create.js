function findOrCreate(model, where, defaults) {
  const query = {
    where,
    defaults
  };

  return model.findOrCreate(query);
}

module.exports = findOrCreate;
