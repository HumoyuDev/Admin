import { StaffService } from "../service/Staff.service.js"

class StaffController {
    constructor() {}

    async GetAllStaff (req, res, next) {
        try {
            const  result = await StaffService.ReadAllStaff()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
    
    
    async GetStaff (req, res, next) {
        try {
            const  result = await StaffService.ReadStaff(req.query)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }


    async Register (req, res, next) {
        try {
            const dataToken = {
                userIp: req.ip,
                userAgent: req.headers['user-agent']
            }

            const result = await StaffService.registerStaff(req.body, req.files.img, dataToken)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }


    async Verify (req, res, next) {
        try {
            const result = await StaffService.RegisterVerify(req.query)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }


    
    async Login (req, res, next) {
        try {
            const dataToken = {
                userIp: req.ip,
                userAgent: req.headers['user-agent']
            }

            const result = await StaffService.loginStaff(req.body, dataToken)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
    


    async UpdateStaff (req, res, next) {
        try {
            const result = await StaffService.ChangeStaff(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    

    
    async RemoveStaff (req, res, next) {
        try {
            const result = await StaffService.DeleteStaff(req.params.id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }


}

const staffController = new StaffController()

export default staffController