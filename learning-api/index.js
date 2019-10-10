const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const healthCheckRoute = require('./lib/src/health-check/routes');
require('./data/main');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

healthCheckRoute(app);

app.listen(config.get('app.port'),  () => {
  console.log(`Server listening on: ${config.get('app.port')}`);
})
