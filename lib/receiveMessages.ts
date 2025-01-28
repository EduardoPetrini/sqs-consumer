export const receiveMessages = async (SQS: AWS.SQS, queueUrl: string) => {
    const params = {
        QueueUrl: queueUrl,
    };

    const data = await SQS.receiveMessage(params).promise();
    return data;
};
