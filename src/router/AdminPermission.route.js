import { Router } from "express";
import validate from '../middleware/validation/AdminPermission.js';
import chekToken from "../middleware/chekToken.js";
import adminPermissionController from "../controller/AdminPermission.controller.js";
import permission from "../middleware/permission.js";

const AdminPermissionRouter = Router();

/**
 * @swagger
 * tags:
 *   name: AdminPermission
 *   description: Admin permission management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AdminPermission:
 *       type: object
 *       required:
 *         - staff_id
 *         - PermissionModel
 *         - actions
 *       properties:
 *         staff_id:
 *           type: string
 *           description: Staff member ID
 *         PermissionModel:
 *           type: string
 *           description: Permission model name
 *         actions:
 *           type: array
 *           items:
 *             type: string
 *           description: List of allowed actions
 */

/**
 * @swagger
 * /api/adminpermission/all:
 *   get:
 *     summary: Get all admin permissions
 *     tags: [AdminPermission]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of admin permissions
 */
AdminPermissionRouter.get('/all', chekToken, permission, adminPermissionController.GetAllPermission);

/**
 * @swagger
 * /api/adminpermission/single:
 *   get:
 *     summary: Get a single admin permission
 *     tags: [AdminPermission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: staff_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: A single admin permission
 */
AdminPermissionRouter.get('/single', chekToken, permission, adminPermissionController.GetOnePermission);

/**
 * @swagger
 * /api/adminpermission/add:
 *   post:
 *     summary: Create a new admin permission
 *     tags: [AdminPermission]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminPermission'
 *     responses:
 *       201:
 *         description: Permission created successfully
 */
AdminPermissionRouter.post('/add', validate, chekToken, permission, adminPermissionController.CreatePermission);

/**
 * @swagger
 * /api/adminpermission/update:
 *   put:
 *     summary: Update an existing admin permission
 *     tags: [AdminPermission]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminPermission'
 *     responses:
 *       201:
 *         description: Permission updated successfully
 */
AdminPermissionRouter.put('/update', validate, chekToken, permission, adminPermissionController.UpdatePermission);

/**
 * @swagger
 * /api/adminpermission/{id}:
 *   delete:
 *     summary: Delete an admin permission
 *     tags: [AdminPermission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Permission ID
 *     responses:
 *       201:
 *         description: Permission deleted successfully
 */
AdminPermissionRouter.delete('/:id', validate, chekToken, permission, adminPermissionController.RemovePermission);

export default AdminPermissionRouter;
