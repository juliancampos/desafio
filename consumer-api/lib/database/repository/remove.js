function remove(model, where) {
  return model.destroy(where);
}

module.exports = remove;
