import { StaffModel } from "../module/staffs.module.js"
import { CustomError } from "../utils/CustomError.js"
import jwt from "../utils/jwt.js"

export default async (req, res, next)  => {
    try {
        const { token } = req.headers
        if(!token) throw new CustomError(404, 'token is require !')

        const {id, userIp, userAgent} = jwt.verify(token)
        const  staff = await StaffModel.findById(id)

        if(!staff) throw new CustomError(404, 'User not found !')
        if(req.ip != userIp || req.headers['user-agent'] != userAgent) throw new CustomError(400,'Invalid token')

        req.staff = staff
        next()
    } catch (error) {
        if(error.name == 'TokenExpiredError') return next(new CustomError(400, 'Token expire !'))
        if(error.name == 'JsonWebTokenError') return next(new CustomError(400, 'Invalid token !'))
        return next(error)
    }
} 