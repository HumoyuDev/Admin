import { BranchService } from "../service/Branch.service.js";

class BranchController {
    constructor() {}

    async GetAllBranch (req, res, next) {
        try {
            const result = await BranchService.ReadBranches()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    async GetOneBranch (req, res, next) {
        try {
            const result = await BranchService.ReadOneBranche(req.query)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async CreateBranch (req, res, next) {
        try {
            const result = await BranchService.AddBranch(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async UpdateBranch (req, res, next) {
        try {
            const result = await BranchService.ChangeBranch(req.body, req.params.id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async RemoveBranch (req, res, next) {
        try {
            const result = await BranchService.DeleteBranch(req.params.id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

}

const branchController = new BranchController()

export default branchController