import { Router } from "express";
import permissionController from "../controller/Permission.controller.js";
import validate from '../middleware/validation/Permission.js';
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";

const PermissionRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Permission
 *   description: Staff permissions management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Permission:
 *       type: object
 *       required:
 *         - staff_id
 *         - PermissionModel
 *         - actions
 *       properties:
 *         staff_id:
 *           type: string
 *           description: Staff ID (reference)
 *         PermissionModel:
 *           type: string
 *           description: Permission name or model
 *         actions:
 *           type: array
 *           items:
 *             type: string
 *           description: List of allowed actions
 */

/**
 * @swagger
 * /api/permission/all:
 *   get:
 *     summary: Get all permissions
 *     tags: [Permission]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all permissions
 */
PermissionRouter.get('/all', chekToken, permission, permissionController.GetAllPermission);

/**
 * @swagger
 * /api/permission/single:
 *   get:
 *     summary: Get a single permission
 *     tags: [Permission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the permission
 *     responses:
 *       200:
 *         description: Single permission data
 */
PermissionRouter.get('/single', chekToken, permission, permissionController.GetOnePermission);

/**
 * @swagger
 * /api/permission/add:
 *   post:
 *     summary: Create a new permission
 *     tags: [Permission]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Permission'
 *     responses:
 *       201:
 *         description: Permission created successfully
 */
PermissionRouter.post('/add', validate, chekToken, permission, permissionController.CreatePermission);

/**
 * @swagger
 * /api/permission/update:
 *   put:
 *     summary: Update an existing permission
 *     tags: [Permission]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Permission'
 *     responses:
 *       200:
 *         description: Permission updated successfully
 */
PermissionRouter.put('/update', validate, chekToken, permissionController.UpdatePermission);

/**
 * @swagger
 * /api/permission/{id}:
 *   delete:
 *     summary: Delete a permission by ID
 *     tags: [Permission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the permission
 *     responses:
 *       200:
 *         description: Permission deleted successfully
 */
PermissionRouter.delete('/:id', validate, chekToken, permission, permissionController.RemovePermission);

export default PermissionRouter;
