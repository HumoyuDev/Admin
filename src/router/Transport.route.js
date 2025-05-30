import { Router } from "express";
import transportController from "../controller/Transport.controller.js";
import validate from '../middleware/validation/transport.js';
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";

const TransportRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Transport
 *   description: Transport management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Transport:
 *       type: object
 *       required:
 *         - branch_id
 *         - model
 *         - color
 *         - price
 *       properties:
 *         branch_id:
 *           type: string
 *           description: Branch ID (foreign key)
 *         model:
 *           type: string
 *           description: Transport model (e.g., Cobalt, Damas)
 *         color:
 *           type: string
 *           description: Transport color
 *         img:
 *           type: string
 *           description: Image URL
 *         price:
 *           type: number
 *           description: Transport narxi
 *         time:
 *           type: string
 *           format: date
 *           description: Qo‘shilgan vaqt
 */

/**
 * @swagger
 * /api/transport/single/{branch_id}:
 *   get:
 *     summary: Get transport by branch_id
 *     tags: [Transport]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: branch_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Transport list by branch
 */
TransportRouter.get('/single/:branch_id', chekToken, permission, transportController.GetTransport);

/**
 * @swagger
 * /api/transport/add:
 *   post:
 *     summary: Add new transport
 *     tags: [Transport]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transport'
 *     responses:
 *       201:
 *         description: Transport added successfully
 */
TransportRouter.post('/add', validate, chekToken, permission, transportController.CreateTransport);

/**
 * @swagger
 * /api/transport/update:
 *   put:
 *     summary: Update transport info
 *     tags: [Transport]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transport'
 *     responses:
 *       200:
 *         description: Transport updated successfully
 */
TransportRouter.put('/update', validate, chekToken, permission, transportController.UpdateTransport);

/**
 * @swagger
 * /api/transport/{id}:
 *   delete:
 *     summary: Delete transport by ID
 *     tags: [Transport]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Transport ID
 *     responses:
 *       200:
 *         description: Transport deleted successfully
 */
TransportRouter.delete('/:id', validate, chekToken, permission, transportController.RemoveTransport);

export default TransportRouter;
