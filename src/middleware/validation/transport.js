import { CustomError } from "../../utils/CustomError.js"
import { TransportValidation } from "../../validation/transport.validation.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.originalUrl == '/v1/api/transport/add') {
            const { error } = await TransportValidation.CreateScheme.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        

        if(req.method == 'PUT' && req.originalUrl.startsWith('/v1/api/transport/update')) {
            const { error } = await TransportValidation.ChangeScheme.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        next()
    } catch (error) {
        next(error)
    }
}