import { Router } from "express";
import {
    getAllPastel, 
    getPastelById,
    createPastel,
    updatePastel,
    deletePastel
} from "../controllers/pastelController";

const pastelRoutes = Router();

/**
 * @swagger
 * tags:
 *  name: Pastel
 *  description: CRUD relacionado con Pasteles
 */

/**
 * @swagger
 * /api/pastel:
 *    get:
 *      summary: Obtener todos los productos
 *      tags: [Pastel] 
 *      responses:
 *        200:
 *          description: Lista de productos
 */
pastelRoutes.get("/", getAllPastel); // Trae todos los productos

/**
 * @swagger
 * /api/pastel/{id}:
 *     get:
 *       summary: Obtener un producto por ID
 *       tags: [Pastel]
 *       parameters: 
 *         - in: path
 *           name: id
 *           required: true
 *           schema: 
 *             type: integer
 *           description: ID del producto
 *       responses:
 *          200:
 *            description: Detalles del producto
 *          404:
 *            description: Producto no encontrado
 */
pastelRoutes.get("/:id", getPastelById); // Trae un solo producto

/**
 * @swagger
 * /api/pastel:
 *    post:
 *      summary: Crear un nuevo producto
 *      tags: [Pastel]
 *      requestBody: 
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *                - description
 *                - price
 *                - imgUrl
 *              properties:
 *                name:
 *                  type: string
 *                description: 
 *                  type: string
 *                price:
 *                  type: number
 *                imgUrl:
 *                  type: string
 *      responses:
 *        201:
 *          description: Producto creado
 *        500:
 *          description: Error en el servidor 
 */
pastelRoutes.post("/", createPastel); // Crear un producto
 
/**
 * @swagger
 * /api/pastel/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [Pastel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               imgUrl:
 *                 type: string
 *               
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
pastelRoutes.put("/:id", updatePastel); // Actualizar un producto

/**
 * @swagger
 * /api/pastel/{id}:
 *   delete:
 *     summary: Eliminar
 *     tags: [Pastel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
pastelRoutes.delete("/:id", deletePastel); // Borrar producto

export default pastelRoutes;