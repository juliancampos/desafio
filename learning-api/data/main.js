const elastic = require('../lib/common/elastic');
const data = require('./index');
const config = require('config');

(async function main() {
  const isElasticReady = await elastic.checkConnection();

  if (isElasticReady) {
    const elasticIndex = await elastic.esclient.indices.exists({ index: elastic.index });

    if (!elasticIndex.body) {
      await elastic.createIndex(elastic.index);
      await elastic.setQuotesMapping();
      await data.populateDatabase()
    }
  }
})();