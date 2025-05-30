import { model, Schema } from "mongoose";

export const BranchModel = model('Branch', new Schema({
    name: {type: String, unique: true},
    address_id: {type: Schema.Types.ObjectId, ref: 'Adress'},
    time: {type: Date, default: new Date()}
}))