# SQS Consumer

A Node.js project written in TypeScript to consume messages from an AWS SQS (Simple Queue Service) queue.

## Prerequisites

- Node.js (v18 or higher recommended)
- AWS account with SQS access
- LocalStack (optional, for local development)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/sqs-consumer.git
   cd sqs-consumer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   QUEUE_NAME=your-queue-name
   ```

## Configuration

- **Local Development**: If you're using LocalStack for local development, ensure that the `endpoint` in `index.ts` points to your LocalStack SQS service (`http://localhost:4566`).
- **AWS SQS**: If you're connecting to AWS SQS directly, update the `AWS.SQS` configuration in `index.ts` with your AWS credentials and region.

## Usage

### Running the Consumer

To start consuming messages from the SQS queue, run:

```bash
npm start
```

This will:
1. Connect to the SQS queue specified in the `.env` file.
2. Poll the queue for messages.
3. Process and delete the messages once they are received.

### Development

For development, you can use `nodemon` to automatically restart the server when changes are detected:

```bash
npm run dev
```

### Testing

To run tests, use:

```bash
npm test
```

## Project Structure

- `index.ts`: The main entry point of the application.
- `lib/receiveMessages.ts`: Handles receiving messages from the SQS queue.
- `lib/deleteMessages.ts`: Handles deleting messages from the SQS queue after processing.
- `.env`: Environment variables configuration.
- `package.json`: Project dependencies and scripts.

## Dependencies

- **aws-sdk**: AWS SDK for JavaScript to interact with AWS services.
- **dotenv**: Loads environment variables from a `.env` file.
- **typescript**: TypeScript compiler and tooling.
- **nodemon**: Utility to monitor changes in the source code and restart the server.
- **ts-node**: TypeScript execution environment for Node.js.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
