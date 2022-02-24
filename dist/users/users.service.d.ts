import { User } from "./users.model";
import { Model } from "mongoose";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    addUser(firstname: string, lastname: String, address: string): Promise<User>;
    deleteUser(userId: string): Promise<User>;
    getUserById(UserId: string): Promise<User>;
    editUser(userId: string, firstname: string, lastname: string, address: string): Promise<User>;
    listUsers(): Promise<User[]>;
}
