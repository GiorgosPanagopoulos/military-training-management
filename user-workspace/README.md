# Military Training Management

This is a full-stack application for managing military personnel, services, trainings, and training records with scores and success percentages.

## Technologies Used

- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT for authentication
- Frontend: React, Next.js, Tailwind CSS
- Testing: Jest (to be implemented), Postman for API integration tests
- Documentation: Swagger (to be implemented)

## Setup and Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install backend dependencies:

```bash
cd src/backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../../
npm install
```

4. Create a `.env` file in `src/backend` with the following variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

5. Run the backend server:

```bash
cd src/backend
npm start
```

6. Run the frontend development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

## Testing

- Unit tests and integration tests will be added.
- Use Postman to test REST API endpoints.

## API Documentation

- Swagger documentation will be added.

## Features

- Manage personnel, services, trainings, and training records.
- Authentication and authorization with JWT.
- Responsive and modern UI with Tailwind CSS.

## License

MIT License
