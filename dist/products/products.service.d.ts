import { Model } from "mongoose";
import { Product } from './product.model';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    addProduct(name: string, price: number, quantity: number, imageURL: string): Promise<Product>;
    listProducts(): Promise<Product[]>;
    getProductById(productId: string): Promise<Product>;
    deleteProduct(productId: string): Promise<any>;
    editProduct(productId: string, name: string, price: number, quantity: number, imageURL: string): Promise<Product>;
}
