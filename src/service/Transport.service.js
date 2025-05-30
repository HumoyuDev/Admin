import { TransportModel } from "../module/transport.module.js"

export class TransportService {
    constructor() {}

    
    static async read (branch_id) {
        const Transports = await TransportModel.findOne({branch_id})
        return {status: 201, messagae: 'Transport success Readed !', data: Transports, seccess: true}
    }




    static async add (body) {
        await TransportModel.create(body)
        return {status: 201, messagae: 'Transport success Created !', data: null, seccess: true}
    }
    
    

    static async update (body, id) {
        await TransportModel.updateOne({_id: id, $set: body})
        return {status: 201, messagae: 'Transport success Updated !', data: null, seccess: true}
    }
    
    

    static async delete (id) {
        await TransportModel.findByIdAndDelete(id)
        return {status: 201, messagae: 'Transport success Deleted !', data: null, seccess: true}
    }
}