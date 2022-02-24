import * as mongoose from "mongoose";
export declare const UserSchema: any;
export interface User extends mongoose.Document {
    firstname: String;
    lastname: String;
    address: String;
}
