import { model, Schema } from "mongoose";

export const AdminPermisionModel = model('AdminPermission', new Schema({
    staff_id: {type: String, ref: 'Staff'},
    PermissionModel: String,
    actions: [String]
}))