import * as mongoose from "mongoose";
export declare const ProductSchema: any;
export interface Product extends mongoose.Document {
    name: String;
    price: Number;
    quantity: Number;
    image?: String;
}
