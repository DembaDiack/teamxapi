import { Product } from "./product.model";
import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly ProductsService;
    constructor(ProductsService: ProductsService);
    addProduct(name: string, price: number, quantity: number, imageURL: string): Promise<Product>;
    listProducts(): Promise<Product[]>;
    deleteProduct(productId: string): Promise<any>;
    getProductById(productId: string): Promise<Product>;
    editProduct(productId: string, name: string, price: number, quantity: number, imageURL: string): Promise<Product>;
}
