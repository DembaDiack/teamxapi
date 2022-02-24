import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from './users.model';
import {UsersController} from "./users.controller";
import {UserService} from "./users.service";


@Module({
    imports : [MongooseModule.forFeature([{
        name : "User",
        schema : UserSchema
    }])],
    controllers : [UsersController],
    providers : [UserService]
})
export class UsersModule {
    
}
