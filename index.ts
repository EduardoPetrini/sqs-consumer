import 'dotenv/config';
import AWS from 'aws-sdk';
import { receiveMessages } from './lib/receiveMessages';
import { setTimeout } from 'timers/promises';
import { deleteMessages } from './lib/deleteMessages';

const SQS = new AWS.SQS({
    endpoint: 'http://localhost:4566',
    region: 'us-east-1',
});

(async () => {
    const QUEUE_NAME = process.env.QUEUE_NAME || 'test-queue';

    const queueUrl = await SQS.getQueueUrl({ QueueName: QUEUE_NAME }).promise();

    console.log(queueUrl);

    if (!queueUrl.QueueUrl) {
        throw new Error('Queue URL not found');
    }

    let messages = await receiveMessages(SQS, queueUrl.QueueUrl);

    let count = 1;
    while (messages.Messages && !messages.Messages.length) {
        console.log('No messages receivedWaiting for messages...', count);
        await setTimeout(5000);
        messages = await receiveMessages(SQS, queueUrl.QueueUrl);
        count++;
    }

    console.log(messages);
    console.log('Deleting messages...');
    await deleteMessages(SQS, queueUrl.QueueUrl, messages.Messages!);

})();
