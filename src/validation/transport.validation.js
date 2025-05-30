import Joi from "joi";

export class TransportValidation{
    constructor(){}

    static CreateScheme = Joi.object({
        branch_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        model: Joi.string().required(),
        color: Joi.string().required(),
        price: Joi.number().min(1).required()
    })
    
    
    static ChangeScheme = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        branch_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
        model: Joi.string(),
        color: Joi.string(),
        price: Joi.number().min(1)
    })
}