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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async addProduct(name, price, quantity, imageURL) {
        const prod = new this.productModel({ name: name, image: imageURL, price: price, quantity: quantity });
        const result = await prod.save();
        return result;
    }
    async listProducts() {
        const products = await this.productModel.find().exec();
        return products;
    }
    async getProductById(productId) {
        let prod;
        try {
            prod = await this.productModel.findById(productId);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        if (!prod) {
            throw new common_1.NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        return prod;
    }
    async deleteProduct(productId) {
        let prod;
        try {
            prod = await this.productModel.findByIdAndDelete(productId);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        if (!prod) {
            throw new common_1.NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        return prod;
    }
    async editProduct(productId, name, price, quantity, imageURL) {
        let product = await this.getProductById(productId);
        if (name) {
            product.name = name;
        }
        if (price) {
            product.price = price;
        }
        if (quantity) {
            product.quantity = quantity;
        }
        if (imageURL) {
            product.image = imageURL;
        }
        return await product.save();
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Product")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map