import { Router } from "express";
import BranchRouter from "./Branch.route.js";
import TransportRouter from "./Transport.route.js";
import StaffRouter from "./Staff.route.js";
import PermissionRouter from "./Permission.route.js";
import AdminPermissionRouter from "./AdminPermission.route.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Branch
 *     description: Branch management
 *   - name: Transport
 *     description: Transport management
 *   - name: Staff
 *     description: Staff management (register/login/update)
 *   - name: Permission
 *     description: Permission management for staff
 *   - name: AdminPermission
 *     description: Admin-specific permission operations
 */

/**
 * @swagger
 * /api/branch:
 *   get:
 *     summary: Branch router entry point
 *     tags: [Branch]
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 * /api/transport:
 *   get:
 *     summary: Transport router entry point
 *     tags: [Transport]
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 * /api/staff:
 *   get:
 *     summary: Staff router entry point
 *     tags: [Staff]
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 * /api/permission:
 *   get:
 *     summary: Permission router entry point
 *     tags: [Permission]
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 * /api/admin/permission:
 *   get:
 *     summary: Admin permission router entry point
 *     tags: [AdminPermission]
 *     responses:
 *       200:
 *         description: OK
 */

router.use('/branch', BranchRouter);
router.use('/transport', TransportRouter);
router.use('/staff', StaffRouter);
router.use('/permission', PermissionRouter);
router.use('/admin/permission', AdminPermissionRouter);

export default router;
