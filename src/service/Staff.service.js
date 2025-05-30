import { StaffModel } from "../module/staffs.module.js"
import bcrypt from 'bcrypt'
import { CustomError } from "../utils/CustomError.js"
import jwt from "../utils/jwt.js"
import path from 'path'
import nodemailer from 'nodemailer'

export class StaffService {
    constructor() {}

    static async generateTokens(dataToken, id) {
        return { 
            accessToken: jwt.sign({ ...dataToken, id }), 
            refreshToken: jwt.signRef({ ...dataToken, id }) 
        }
    }



    static async ReadAllStaff () {
        try {
            const staffs = await StaffModel.find()
            return {status: 200, message: 'Staff success Readed !', date: staffs, success: true}
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }
    
    
    static async ReadStaff (query) {
        try {
            const staffs = await StaffModel.find(query)
            return {status: 200, message: 'Staff success Readed !', date: staffs, success: true}
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }

    
    
    
    static async registerStaff(body, img, dataToken) {
        try {
            const filename = new Date().getTime() + "_" + img.name
            body.password = await bcrypt.hash(body.password, 10)

            const staff = await StaffModel.create({...body, img: filename,})

            await new Promise((resolve, reject) => {
                img.mv(path.join(process.cwd(), 'src', 'uploads', filename), (err) => {
                if (err) reject(err)
                else resolve()
                })
            })

            const link = `http://localhost:4000/v1/api/staff/verify?id=${staff._id}`
            
            const transporter = nodemailer.createTransport({service: 'gmail', auth:{user: process.env.NODEAILER_USER, pass: process.env.NODEAILER_PASS}})

            const mailOptions = {
                from: `"Tizim" <${process.env.NODEAILER_USER}>`,
                to: staff.email,
                subject: 'Link orqali tasdiqlang !',
                html: `
                <h2>Assalomu alaykum, ${staff.username}</h2>
                <a href="${link}">havolani bosing !</a>
                `
            }
            await transporter.sendMail(mailOptions)

            return "Emailga tasdiqlash kodi yuborildi !"

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }
    
    static async register (query) {
        const { id } = query
        if(!id) throw new CustomError(400, 'Invalid verification link !')
        const udpate = await StaffModel.findByIdAndUpdate(id, {isValid: true}, {new: true})
        
        if(!udpate) throw new CustomError(404, 'User  not found !')

        return " Email tasdiqlandi. Login qilib tizimga kirishingiz mumkin !"
    }


    static async login(body, dataToken) {
        try {
            const staff = await StaffModel.findOne({ username: body.username })
            if (!staff) throw new CustomError(400, 'Invalid username or password !')

            const deshif = await bcrypt.compare(body.password, staff.password)
            if (!deshif) throw new CustomError(404, 'Invalid username or password !')

            const tokens = await this.generateTokens(dataToken, staff._id)
            return tokens
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }
    static async update(body) {
        try {
            const staff = await StaffModel.findByIdAndUpdate( body._id, { $set: body },{ new: true })
            if (!staff) throw new CustomError(404, 'Staff not found')

            return {status: 200, message: 'Staff success updated!', success: true, data: null  }
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }

    static async delete(id) {
        try {
            await StaffModel.findByIdAndDelete(id)
            return { status: 201, message: 'Staff success Deleted !', data: null, success: true }
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }
}
