import Joi from 'joi';

export class PermissionValidation{
    constructor(){}

    static CreateSchema = Joi.object({
        staff_id: Joi.string().required(),
        PermissionModel: Joi.string().min(3).max(50).required(),
        actions: Joi.array().items(Joi.string().min(1)).min(1).required(),
    })
    
    
    static ChangeSchema = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        staff_id: Joi.string(),
        PermissionModel: Joi.string().min(3).max(50),
        actions: Joi.array().items(Joi.string().min(1)).min(1),
    })

}