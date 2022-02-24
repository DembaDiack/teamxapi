import { Controller, Get, Param,Post,Delete, Patch,Body } from "@nestjs/common";
import {UserService} from "./users.service";
import { User } from "./users.model";

@Controller("users")
export class UsersController 
{
    constructor(private readonly UserService:UserService){};
    
    @Get()
    getUsers():Promise<User[]>
    {
        return this.UserService.listUsers();
    }
    @Get(":id")
    getUserById(@Param("id") id:string):Promise<User>
    {
        return this.UserService.getUserById(id);
    }
    @Post()
    AddUser(
        @Body("firstname") firstname:string,
        @Body("lastname") lastname:string,
        @Body("address") address:string
    ):Promise<User>
    {
        return this.UserService.addUser(firstname,lastname,address);
    }

    @Patch(":id")
    editUser(
        @Param("id") id:string,
        @Body("firstname") firstname:string,
        @Body("lastname") lastname:string,
        @Body("address") address:string
    ):Promise<User>
    {
        return this.UserService.editUser(id,firstname,lastname,address);
    }

    @Delete(":id")
    deleteUserById(@Param("id") id:string):Promise<User>
    {
        return this.UserService.deleteUser(id);
    }
}