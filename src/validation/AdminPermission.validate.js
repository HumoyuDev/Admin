import Joi from 'joi';

export class AdminPermissionValidation{
    constructor(){}

    static CreateSchema = Joi.object({
        staff_id: Joi.string().required(),
        PermissionModel: Joi.string().min(3).max(50).required(),
        actions: Joi.array().items(Joi.string().min(1)).min(1).required(),
    })
    
    
    static ChangeSchema = Joi.object({
        staff_id: Joi.string().required(),
        PermissionModel: Joi.string().min(3).max(50),
        actions: Joi.array().items(Joi.string().min(1)).min(1),
    })

}