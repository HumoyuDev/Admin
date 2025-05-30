import { TransportService } from '../service/Transport.service.js'


class TransportController {
    constructor() {}

    async GetTransport (req, res, next) {
        try {
            const result = await TransportService.ReadTransport(req.params.branch_id)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }


    async CreateTransport (req, res, next) {
        try {
            const result = await TransportService.CreateTransport(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async UpdateTransport (req, res, next) {
        try {
            const result = await TransportService.UpdateTransport(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async RemoveTransport (req, res, next) {
        try {
            const result = await TransportService.DeleteTransport(req.params.id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

}

const transportController = new TransportController()

export default transportController