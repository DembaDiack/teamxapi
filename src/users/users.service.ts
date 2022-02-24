import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./users.model";
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService 
{
    constructor(@InjectModel("User") private readonly userModel:Model<User>){};

    async addUser(firstname:string,lastname:String,address:string):Promise<User>
    {
        const user = new this.userModel({
            firstname : firstname,
            lastname : lastname,
            address : address
        });
        const result = await user.save();
        return result;
    }   

    async deleteUser(userId:string):Promise<User>
    {
        let user
        try
        {
            user = await this.userModel.findByIdAndDelete(userId);
        }
        catch(error)
        {
            throw new NotFoundException(`Produit avec id ${userId} introuvable!`);
        }
        if(!user)
        {
            throw new NotFoundException(`Produit avec id ${userId} introuvable!`);
        }
        return user;
    }
    async getUserById(UserId:string):Promise<User> 
    {   let user
        try
        {
            user = await this.userModel.findById(UserId);
        }
        catch(error)
        {
            throw new NotFoundException(`Produit avec id ${UserId} introuvable!`);
        }
        if(!user)
        {
            throw new NotFoundException(`Produit avec id ${UserId} introuvable!`);
        }
        return user;
    }
    async editUser(userId:string,firstname:string,lastname:string,address:string):Promise<User>
    {
        let user = await this.getUserById(userId);
        if(firstname)
        {
            user.firstname = firstname;
        }
        if(lastname)
        {
            user.lastname = lastname;
        }
        if(address)
        {
            user.address = address;
        }
        return await user.save();
    }
    async listUsers():Promise<User[]>
    {
        const products = await this.userModel.find().exec();
        return products;
    }
}