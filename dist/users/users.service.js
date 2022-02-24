"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    ;
    async addUser(firstname, lastname, address) {
        const user = new this.userModel({
            firstname: firstname,
            lastname: lastname,
            address: address
        });
        const result = await user.save();
        return result;
    }
    async deleteUser(userId) {
        let user;
        try {
            user = await this.userModel.findByIdAndDelete(userId);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Produit avec id ${userId} introuvable!`);
        }
        if (!user) {
            throw new common_1.NotFoundException(`Produit avec id ${userId} introuvable!`);
        }
        return user;
    }
    async getUserById(UserId) {
        let user;
        try {
            user = await this.userModel.findById(UserId);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Produit avec id ${UserId} introuvable!`);
        }
        if (!user) {
            throw new common_1.NotFoundException(`Produit avec id ${UserId} introuvable!`);
        }
        return user;
    }
    async editUser(userId, firstname, lastname, address) {
        let user = await this.getUserById(userId);
        if (firstname) {
            user.firstname = firstname;
        }
        if (lastname) {
            user.lastname = lastname;
        }
        if (address) {
            user.address = address;
        }
        return await user.save();
    }
    async listUsers() {
        const products = await this.userModel.find().exec();
        return products;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("User")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map