# AWS SQS Consumer

A TypeScript Node.js application for consuming messages from Amazon Simple Queue Service (SQS).

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- AWS credentials configured
- Local SQS instance running (e.g., via LocalStack) or access to AWS SQS

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
QUEUE_NAME=test-queue
```

## Project Structure

```
.
├── lib/
│   ├── receiveMessages.ts
│   └── deleteMessages.ts
├── index.ts
├── package.json
└── README.md
```

## Features

- Connects to AWS SQS (supports both local and AWS environments)
- Polls for messages with a 5-second interval
- Automatically deletes processed messages
- TypeScript support for better development experience

## Usage

### Development Mode

Run the application with hot-reload:

```bash
npm run dev
```

### Production Mode

Run the application:

```bash
npm start
```

### Running Tests

Execute the test suite:

```bash
npm test
```

## API Reference

### receiveMessages

```typescript
receiveMessages(SQS: AWS.SQS, queueUrl: string) => Promise<AWS.SQS.ReceiveMessageResult>
```

Receives messages from the specified SQS queue.

### deleteMessages

```typescript
deleteMessages(
  SQS: AWS.SQS, 
  queueUrl: string, 
  messages: AWS.SQS.MessageList
) => Promise<AWS.SQS.DeleteMessageBatchResultEntryList>
```

Deletes processed messages from the queue.

## Local Development

The project is configured to work with LocalStack by default. The SQS endpoint is set to:

```
http://localhost:4566
```

## Dependencies

- aws-sdk: AWS SDK for JavaScript
- dotenv: Environment variable management
- typescript: TypeScript support
- nodemon: Development hot-reload
- ts-node: TypeScript execution environment
- tsx: TypeScript execution and testing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC