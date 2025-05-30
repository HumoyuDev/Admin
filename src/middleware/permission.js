import { AdminPermisionModel } from '../module/adminPermission.module.js'
import { PermissionModel } from '../module/Permission.module.js'
import { CustomError } from '../utils/CustomError.js'

export default async (req, res, next) => {
  try {
    const { role, _id } = req.staff

    if(role === 'SuperAdmin') return next()

    const permissionModel = req.url.split('/').at(-2)

    const adminPermission = await AdminPermisionModel.findOne({staff_id: _id, PermissionModel: permissionModel})

    if(!adminPermission || !adminPermission.actions.includes(req.method)) {
       throw new CustomError(403, 'You are not allowed!')
    }
    const permission = await PermissionModel.findOne({staff_id: _id, PermissionModel: permissionModel})

    if(!permission || !permission.actions.includes(req.method)) {
       throw new CustomError(403, 'You are not allowed!')
    }

    next()

  } catch (error) {
    next(error)
  }
}