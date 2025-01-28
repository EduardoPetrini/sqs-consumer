export const deleteMessages = async (
  SQS: AWS.SQS,
  queueUrl: string,
  messages: AWS.SQS.MessageList
) => {
  const results: AWS.SQS.DeleteMessageBatchResultEntryList = [];

  try {
    for (let message of messages) {
      const params = {
        QueueUrl: queueUrl,
        ReceiptHandle: message!.ReceiptHandle!,
      };
      await SQS.deleteMessage(params).promise();
      results.push({ Id: message.MessageId! });
    }

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
