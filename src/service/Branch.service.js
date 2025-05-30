import { BranchModel } from "../module/branch.module.js";

export class BranchService {
    constructor() {}

    static async ReadBranches () {
        const branchs = await BranchModel.find()
        return {status: 201, messagae: 'Branch success Readed !', data: branchs, seccess: true}
    }

    static async Red(query = null) {
        const branch = await BranchModel.findOne(query)
        return { status: 200, message: 'Branch succes Readed !', data: branch, success: true }
    }
    static async add (body) {
        await BranchModel.create(body)
        return {status: 201, messagae: 'Branch success Created !', data: null, seccess: true}
    }
    
    static async update (body, id) {
        await BranchModel.updateOne({_id: id, $set: body})
        return {status: 201, messagae: 'Branch success Updated !', data: null, seccess: true}
    }
    
    
    static async delete (id) {
        await BranchModel.findByIdAndDelete(id)
        return {status: 201, messagae: 'Branch success Deleted !', data: null, seccess: true}
    }
}