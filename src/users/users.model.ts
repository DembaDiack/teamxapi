import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    firstname : {type : String,required : true},
    lastname : {type : String,required : true},
    address : {type : String,required : true}
});

export interface User extends mongoose.Document
{
    firstname:String,
    lastname:String,
    address:String
}