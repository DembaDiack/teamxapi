import { UserService } from "./users.service";
import { User } from "./users.model";
export declare class UsersController {
    private readonly UserService;
    constructor(UserService: UserService);
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    AddUser(firstname: string, lastname: string, address: string): Promise<User>;
    editUser(id: string, firstname: string, lastname: string, address: string): Promise<User>;
    deleteUserById(id: string): Promise<User>;
}
