import { PermissionService } from "../service/Permission.service.js"

class Permissionontroller {
    constructor() {}

    async GetAllPermission (req, res, next) {
        try {
            const result = await PermissionService.ReadPermisions()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    async GetOnePermission (req, res, next) {
        try {
            const result = await PermissionService.ReadOnePermision(req.query)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async CreatePermission (req, res, next) {
        try {
            const result = await PermissionService.AddPermission(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async UpdatePermission (req, res, next) {
        try {
            const result = await PermissionService.ChangePermission(req.body, req.params.id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async RemovePermission (req, res, next) {
        try {
            const result = await PermissionService.DeletePermission(req.params.id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

}

const permissionController = new Permissionontroller()

export default permissionController