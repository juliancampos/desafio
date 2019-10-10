const { getAll, save, getByDocument } = require('../controllers');

module.exports = (app) => {
  app.get('/person', getAll);
  app.post('/person', save);
  app.get('/person/:document', getByDocument);
}