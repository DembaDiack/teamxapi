import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose";
import { Product } from './product.model';

@Injectable()
export class ProductsService {

    constructor(@InjectModel("Product") private readonly productModel:Model<Product>){}

    async addProduct(name:string,price:number,quantity:number,imageURL:string):Promise<Product> 
    {
        const prod = new this.productModel({name : name,image : imageURL,price : price,quantity : quantity});
        const result = await prod.save();
        return result;
    }
    async listProducts():Promise<Product[]>
    {
        const products = await this.productModel.find().exec();
        return products;
    }
    async getProductById(productId:string):Promise<Product> 
    {   let prod
        try
        {
            prod = await this.productModel.findById(productId);
        }
        catch(error)
        {
            throw new NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        if(!prod)
        {
            throw new NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        return prod;
    }
    async deleteProduct(productId:string):Promise<any>
    {   
        let prod
        try
        {
            prod = await this.productModel.findByIdAndDelete(productId);
        }
        catch(error)
        {
            throw new NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        if(!prod)
        {
            throw new NotFoundException(`Produit avec id ${productId} introuvable!`);
        }
        return prod;

    }
    async editProduct(productId:string,name:string,price:number,quantity:number,imageURL:string):Promise<Product> 
    {
        let product = await this.getProductById(productId);
        if(name)
        {
            product.name = name;
        }
        if(price)
        {
            product.price = price;
        }
        if(quantity)
        {
            product.quantity = quantity;
        }
        if(imageURL)
        {
            product.image = imageURL;
        }
        return await product.save();
    }
}
