import { AdminPermissionService } from "../service/AdminPermission.service.js"

class AdminPermissionontroller {
    constructor() {}

    async GetAllPermission (req, res, next) {
        try {
            const result = await AdminPermissionService.ReadPermisions()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    async GetOnePermission (req, res, next) {
        try {
            const result = await AdminPermissionService.ReadOnePermision(req.query)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async CreatePermission (req, res, next) {
        try {
            const result = await AdminPermissionService.AddPermission(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async UpdatePermission (req, res, next) {
        try {
            const result = await AdminPermissionService.ChangePermission(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async RemovePermission (req, res, next) {
        try {
            const result = await AdminPermissionService.DeletePermission(req.params.id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

}

const adminPermissionController = new AdminPermissionontroller()

export default adminPermissionController