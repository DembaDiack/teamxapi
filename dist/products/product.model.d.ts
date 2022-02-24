import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface Product extends mongoose.Document {
    name: String;
    price: Number;
    quantity: Number;
    image?: String;
}
