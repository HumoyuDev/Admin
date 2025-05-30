import { CustomError } from "../../utils/CustomError.js"
import { StaffValidation } from "../../validation/staff.validation.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.originalUrl == '/v1/api/staff/register') {
            const { error } = await StaffValidation.RegisterScheme.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        
        if(req.method == 'POST' && req.originalUrl == '/v1/api/staff/login') {
            const { error } = await StaffValidation.LoginScheme.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        
        
        if(req.method == 'PUT' && req.originalUrl.startsWith('/v1/api/staff/update')) {
            const { error } = await StaffValidation.ChangeScheme.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        next()
    } catch (error) {
        next(error)
    }
}