import Joi from "joi";

export class StaffValidation{
    constructor(){}
    
    static RegisterScheme = Joi.object({
        branch_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        username: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        repeat_password: Joi.string().valid(Joi.ref('password')).messages({ 'any.only': 'Passwords do not match' }).required(),
        birthDate: Joi.date().iso().required(),
        gender: Joi.string().valid('Male', 'Female').required()
    })
    
    
    static LoginScheme = Joi.object({
        username: Joi.string().min(2).max(50).required(),
        password: Joi.string().min(6).required()
    })
    
    
    static ChangeScheme = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        username: Joi.string().min(2).max(50), 
        password: Joi.string().min(6),
        repeat_password: Joi.string().equal(Joi.ref('password')).messages({'any.only': 'password does not match' }),
        email: Joi.string().email(),
        birthDate: Joi.string(),
        gender: Joi.string().valid('Male','Female')
    })
}