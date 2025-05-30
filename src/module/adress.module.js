import { model, Schema } from "mongoose";

export const AdressModel = model('Adress', new Schema({
    name: {type: String, unique: true}
}))