import swaggerJSDoc, { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: " Backend Service API- Brayan Gallego",
            version: "1.0.0",
            description: "API para Catalogo de Productos"
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ]
    },
    apis: [
        "./src/routes/pastelRoutes.ts"
    ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;