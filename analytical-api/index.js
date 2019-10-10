const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const healthCheckRoute = require('./lib/src/health-check/routes');
const personRoute = require('./lib/src/person/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

healthCheckRoute(app);
personRoute(app);

app.listen(config.get('app.port'),  () => {
  console.log(`Server listening on: ${config.get('app.port')}`);
})
