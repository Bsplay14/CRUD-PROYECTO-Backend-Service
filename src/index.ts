import express, { Application } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import pastelRoutes from "./routes/pastelRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger";

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/pastel", pastelRoutes); // Ruta de Productos

// Documentacion Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inicializacion de la base de datos y el servidor
AppDataSource.initialize()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}\n`);
        console.log(`Endpoints:`);
        console.log(`API Products http://localhost:${PORT}/api/products\n`);
        console.log(`Documentacion:`)
        console.log(`Swagger en http://localhost:${PORT}/api-docs`);
        
    
    });
})
.catch((error) => console.log(error));




