const config = require('config');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send(`${config.get('app.name')}: ok`);
  })
}