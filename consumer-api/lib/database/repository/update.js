function returnDatavalues(list) {
  let data = '';
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].dataValues !== undefined) {
      return list[i].dataValues;
    }
    data = returnDatavalues(list[i]);
  }
  if (data !== '') {
    return data;
  }
}

async function updateModel(model, whereData, ...args) {
  try {
    return await model
      .update(
        ...args,
        { returning: true, where: whereData }
      )
      .then(async data => returnDatavalues(data, model.name));
  } catch (error) {
    return error.message;
  }
}

module.exports = updateModel;
