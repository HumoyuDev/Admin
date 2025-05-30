import { Router } from "express";
import staffController from "../controller/Staff.controller.js";
import validate from '../middleware/validation/Staff.js';
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";

const StaffRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Staff
 *   description: Staff (xodimlar) management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Staff:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - birthDate
 *         - gender
 *       properties:
 *         branch_id:
 *           type: string
 *           description: Branch ID
 *         username:
 *           type: string
 *           description: Unique username
 *         email:
 *           type: string
 *           description: Unique email
 *         img:
 *           type: string
 *           description: Profile image URL
 *         password:
 *           type: string
 *           description: Password (hashed)
 *         birthDate:
 *           type: string
 *           format: date
 *           description: Date of birth
 *         gender:
 *           type: string
 *           enum: [Male, Female]
 *         role:
 *           type: string
 *           default: Staff
 *         isValid:
 *           type: boolean
 *           default: false
 */

/**
 * @swagger
 * /api/staff/all:
 *   get:
 *     summary: Get all staff members
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All staff members
 */
StaffRouter.get('/all', chekToken, permission, staffController.GetAllStaff);

/**
 * @swagger
 * /api/staff/single:
 *   get:
 *     summary: Get single staff by ID or query
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: Staff found
 */
StaffRouter.get('/single', chekToken, permission, staffController.GetStaff);

/**
 * @swagger
 * /api/staff/register:
 *   post:
 *     summary: Register a new staff member
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       201:
 *         description: Staff successfully registered
 */
StaffRouter.post('/register', validate, staffController.Register);

/**
 * @swagger
 * /api/staff/verify:
 *   get:
 *     summary: Verify staff account
 *     tags: [Staff]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Verification token
 *     responses:
 *       200:
 *         description: Verification successful
 */
StaffRouter.get('/verify', staffController.Verify);

/**
 * @swagger
 * /api/staff/login:
 *   post:
 *     summary: Staff login
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful with token
 */
StaffRouter.post('/login', validate, staffController.Login);

/**
 * @swagger
 * /api/staff/update:
 *   put:
 *     summary: Update staff information
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       200:
 *         description: Staff updated successfully
 */
StaffRouter.put('/update', validate, chekToken, permission, staffController.UpdateStaff);

/**
 * @swagger
 * /api/staff/{id}:
 *   delete:
 *     summary: Delete a staff member
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: Staff deleted successfully
 */
StaffRouter.delete('/:id', validate, chekToken, permission, staffController.RemoveStaff);

export default StaffRouter;
