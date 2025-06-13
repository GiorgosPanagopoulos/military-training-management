import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personnel Management API',
      version: '1.0.0',
      description: 'API documentation for Personnel Management System',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{
      bearerAuth: [],
    }],
  },
  apis: [
    './src/backend/routes/*.js',
    './src/backend/models/*.js'
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
