import { PermissionModel } from "../module/Permission.module.js";

export class PermissionService {
    constructor() {}

    static async read () {
        const permisions = await PermissionModel.find()
        return {status: 201, messagae: 'Permission success Readed !', data: permisions, seccess: true}
    }

    static async readone(query = null) {
        const permision = await PermissionModel.find(query)
        return { status: 200, message: 'Permission succes Readed !', data: permision, success: true }
    }


    static async add (body) {
        await PermissionModel.create(body)
        return {status: 201, messagae: 'Permission success Created !', data: null, seccess: true}
    }
    
    
    static async update (body, id) {
        await PermissionModel.updateOne({_id: id, $set: body})
        return {status: 201, messagae: 'Permission success Updated !', data: null, seccess: true}
    }
    
    
    static async delete (id) {
        await PermissionModel.findByIdAndDelete(id)
        return {status: 201, messagae: 'Permission success Deleted !', data: null, seccess: true}
    }
}