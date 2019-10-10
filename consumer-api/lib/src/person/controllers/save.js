const personService = require('../services');
const repository = require('../../../database/repository');
const sqs = require('../../../clients/aws/sqs');

module.exports = async (req, res) => {
  try {
    sqs.send('aprendizagem', { message: 'primeira mensagem de aprendizagem' });
    return res.status(200).send('implementar');
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}