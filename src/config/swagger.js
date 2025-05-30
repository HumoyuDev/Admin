

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Admin Panel API",
      version: "1.0.0",
      description: "Permissions and roles management API",
    },
    servers: [
      {
        url: "http://localhost:4000", 
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/controller/*.js", "./src/router/*.js"], 
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerSpec, swaggerUi };
