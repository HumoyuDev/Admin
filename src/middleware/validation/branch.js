import { CustomError } from "../../utils/CustomError.js"
import { BranchValidate } from "../../validation/Branch.validation.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.originalUrl == '/v1/api/branch/add') {
            const { error } = await BranchValidate.createSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        
        
        if(req.method == 'PUT' && req.originalUrl.startsWith('/v1/api/branch/update')) {
            const { error } = await BranchValidate.changeSchema.validate({...req.body, _id: req.params.id})
            if(error) throw new CustomError(403, error.details[0].message)
        }
        next()
    } catch (error) {
        next(error)
    }
}