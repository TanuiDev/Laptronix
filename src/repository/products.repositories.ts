import { getPool } from "../db/config";



export const getAllProducts = async ()=>{
    const pool = await getPool();
    const results = await pool.request().query("SELECT * FROM Products")
    return results.recordset
}

export const getProductById = async (productId: number)=>{
    const pool = await getPool();
    const results = await pool.request()
    .input("productId", productId)
    .query("SELECT * FROM Products WHERE productId = @productId")
    return results.recordset[0]
}