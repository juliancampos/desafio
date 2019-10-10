const personService = require('../services');
const repository = require('../../../database/repository');

module.exports = async (req, res) => {
  try {
    const search = req.query;
    const result = await personService.getAll(new repository(), search);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  };
}