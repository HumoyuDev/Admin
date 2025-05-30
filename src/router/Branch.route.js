import { Router } from "express";
import branchController from "../controller/Branch.controller.js";
import validate from '../middleware/validation/branch.js';
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";

const BranchRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Branch
 *   description: Branch management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - name
 *         - address_id
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the branch
 *         address_id:
 *           type: string
 *           description: Address ID (reference)
 *         time:
 *           type: string
 *           format: date-time
 *           description: Time the branch was created
 */

/**
 * @swagger
 * /api/branch/all:
 *   get:
 *     summary: Get all branches
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all branches
 */
BranchRouter.get('/all', chekToken, permission, branchController.GetAllBranch);

/**
 * @swagger
 * /api/branch/single:
 *   get:
 *     summary: Get a single branch
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the branch
 *     responses:
 *       200:
 *         description: Single branch object
 */
BranchRouter.get('/single', chekToken, permission, branchController.GetOneBranch);

/**
 * @swagger
 * /api/branch/add:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       201:
 *         description: Branch successfully created
 */
BranchRouter.post('/add', validate, chekToken, permission, branchController.CreateBranch);

/**
 * @swagger
 * /api/branch/{id}:
 *   put:
 *     summary: Update a branch by ID
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Branch ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       200:
 *         description: Branch updated successfully
 */
BranchRouter.put('/:id', validate, chekToken, permission, branchController.UpdateBranch);

/**
 * @swagger
 * /api/branch/{id}:
 *   delete:
 *     summary: Delete a branch by ID
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Branch deleted successfully
 */
BranchRouter.delete('/:id', validate, chekToken, permission, branchController.RemoveBranch);

export default BranchRouter;
