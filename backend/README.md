# Quiz de Hora de Aventura - Backend API

Backend REST API for Adventure Time Quiz application.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- In-memory data storage (no database)
- CORS enabled for frontend integration
- Comprehensive error handling
- Request validation with Zod

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

Server will start on http://localhost:3000

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API v1
All endpoints are prefixed with `/api/v1`

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── instances/        # Service instances
└── server.ts         # Application entry point
```

## License

ISC