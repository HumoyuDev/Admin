import Joi from "joi";

export class BranchValidate {
    constructor() {}

    static createSchema = Joi.object({
        name: Joi.string(),
        address_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
    
    
    static changeSchema = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        name: Joi.string(),
        address_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/)
    })

}