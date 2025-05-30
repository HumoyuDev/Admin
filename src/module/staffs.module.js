import { model, Schema } from "mongoose";

export const StaffModel = model('Staff', new Schema({
    branch_id: {type: String, ref: 'Branch'},
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    img: String,
    password: String,
    birthDate: Date,
    gender: {type: String, enum: ['Female', 'Male']},
    role: {type: String, default: 'Staff'},
    isValid: {type: Boolean, default: false}
}))