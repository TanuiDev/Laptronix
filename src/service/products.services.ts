import * as productsRepositories from "../repository/products.repositories";

export const getAllProductsService = async ()=>{
    const products = await productsRepositories.getAllProducts();
    return products;
}

export const getProductByIdService = async (productId: number)=>{
    const product = await productsRepositories.getProductById(productId);
    return product;
}