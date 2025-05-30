import { model, Schema } from "mongoose";

export const PermissionModel = model('Permission', new Schema({
    staff_id: {type: String, ref: 'Staff'},
    PermissionModel: String,
    actions: [String]
}))