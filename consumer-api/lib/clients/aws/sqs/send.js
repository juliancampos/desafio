const AWS = require('aws-sdk');
const config = require('config');

const queueBaseUrl = config.get('sqs.queueBaseUrl')

AWS.config.update({ region: 'us-east-1' });
const sqs = new AWS.SQS({apiVersion: '2019-10-09'});

module.exports = (queueName, message) => {
  const params = {
    MessageBody: JSON.stringify(message),
    QueueUrl: `${queueBaseUrl}/${queueName}`
  }

  sqs.sendMessage(params, (error, data) => {
    if (error) {
      console.log(`Error: ${error}`);
      return false;
    }
    console.log('Informações enviadas com sucesso!');
  })
}