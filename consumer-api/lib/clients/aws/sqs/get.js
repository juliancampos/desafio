const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});
const queueBaseUrl = config.get('sqs.queueBaseUrl')

const sqs = new AWS.SQS({apiVersion: '2019-10-09'});

const params = {
  QueueUrl: '',
  MaxNumberOfMessages: 1,
  VisibilityTimeout: 0,
  WaitTimeSeconds: 0
};

const deleteParams = {
  QueueUrl: '',
  ReceiptHandle: ''
};

module.exports = (queueName) => {
  params.QueueUrl = `${queueBaseUrl}/${queueName}`;
  deleteParams.QueueUrl = `${queueBaseUrl}/${queueName}`;

  sqs.receiveMessage(params, (error, data) => {
    if (error) {
      console.log(error);
      return false;
    }

    if (!data.Message) { 
      console.log('Não foram encontradas mensagens!'); 
      return false;
    }

    const messageData = JSON.parse(data.Messages[0].Body);
    console.log('Enviar mensagem para api ', messageData);

    deleteParams.ReceiptHandle = data.Messages[0].ReceiptHandle;

    sqs.deleteMessage(deleteParams, (error, data) => {
      if (error) {
        console.log(error, error.stack);
      } else {
        console.log('Mensagem deletada!');
      }
    });                                                                                                                                            
  });
}