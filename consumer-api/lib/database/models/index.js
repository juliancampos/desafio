const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('config');

const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'DSV';

//const config = require('../../../conf/database')[env];

config.logging = (sql, ...args) => {
  const instance = args.pop();
  const benchmark = args.pop();

  // eslint-disable-next-line no-console
  console.log(sql, benchmark, instance.bind);
};

const db = {};
//const sequelize = new Sequelize(config.database, config.username, config.password, config);
const sequelize = new Sequelize(config.get('database.connection'));

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
