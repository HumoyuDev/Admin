import { model, Schema } from "mongoose";

export const TransportModel = model('Transport', new Schema({
    branch_id: {type: String, ref: 'Branch'},
    model: String,
    color: String,
    img: String,
    price: Number,
    time: {type: Date, default: new Date()}
}))