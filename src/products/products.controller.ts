import {Controller, Get,Post,Patch,Delete, Body, Param} from "@nestjs/common";
import { Product } from "./product.model";
import {ProductsService} from "./products.service";

@Controller("products")
export class ProductsController 
{
    constructor(private readonly ProductsService:ProductsService){};

    @Post()
    addProduct(
        @Body("name") name:string,
        @Body("price") price:number,
        @Body("quantity") quantity:number,
        @Body("imageURL") imageURL:string
        ):Promise<Product>
    {
        return this.ProductsService.addProduct(name,price,quantity,imageURL);
    }
    @Get()
    listProducts():Promise<Product[]>
    {
        return this.ProductsService.listProducts();
    }
    @Delete(":id")
    deleteProduct(@Param("id") productId:string):Promise<any>
    {
        return this.ProductsService.deleteProduct(productId);
    }
    @Get(":id")
    getProductById(@Param("id") productId:string):Promise<Product>
    {
        return this.ProductsService.getProductById(productId);
    }
    @Patch(":id")
    editProduct(
        @Param("id") productId:string,
        @Body("name") name:string,
        @Body("price") price:number,
        @Body("quantity") quantity:number,
        @Body("imageURL") imageURL:string
        ):Promise<Product>
    {
        return this.ProductsService.editProduct(productId,name,price,quantity,imageURL);
    }

}