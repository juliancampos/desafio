const { getAll, save } = require('../controllers');

module.exports = (app) => {
  app.get('/person', getAll);
  app.post('/person', save);
}