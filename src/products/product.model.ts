import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    name : {type : String,required : true},
    price : {type : Number,required : true},
    quantity : {type : Number,required : true},
    image : {type : String,required : false}
});

export interface Product extends mongoose.Document
{
    name:String,
    price:Number,
    quantity:Number,
    image?:String
}