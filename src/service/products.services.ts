import * as productsRepositories from "../repository/products.repositories";
import { Product } from "../types/product.types";

export const getAllProductsService = async ()=>{
    const products = await productsRepositories.getAllProducts();
    return products;
}

export const getProductByIdService = async (productId: number)=>{
    const product = await productsRepositories.getProductById(productId);
    return product;
}

export const createProductService = async (newProduct: Product)=>{
    const result = await productsRepositories.createProduct(newProduct);
    return result;
}