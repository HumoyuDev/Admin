import { CustomError } from "../../utils/CustomError.js"
import { AdminPermissionValidation } from "../../validation/AdminPermission.validate.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.originalUrl == '/v1/api/admin/permission/add') {
            const { error } = await AdminPermissionValidation.CreateSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        
        
        if(req.method == 'PUT' && req.originalUrl.startsWith('/v1/api/admin/permission/update')) {
            const { error } = await AdminPermissionValidation.ChangeSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        next()
    } catch (error) {
        next(error)
    }
}