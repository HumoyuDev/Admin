import { AdminPermisionModel } from "../module/adminPermission.module.js"

export class AdminPermissionService {
    constructor() {}

    static async red () {
        const permisions = await AdminPermisionModel.find()
        return {status: 201, messagae: 'AdminPermission success Readed !', data: permisions, seccess: true}
    }

    static async redone(query = null) {
        const permision = await AdminPermisionModel.find(query)
        return { status: 200, message: 'AdminPermission succes Readed !', data: permision, success: true }
    }


    static async add (body) {
        await AdminPermisionModel.create(body)
        return {status: 201, messagae: 'AdminPermission success Created !', data: null, seccess: true}
    }
    
    
    static async update (body) {
        await AdminPermisionModel.updateOne({_id: body.staff_id, $set: body})
        return {status: 201, messagae: 'AdminPermission success Updated !', data: null, seccess: true}
    }
    
    
    static async delete (id) {
        await AdminPermisionModel.findByIdAndDelete(id)
        return {status: 201, messagae: 'AdminPermission success Deleted !', data: null, seccess: true}
    }
}