import { getPool } from "../db/config";


export const getAllOrders = async ()=>{
    const pool = await getPool();
    const results = await pool.request().query("SELECT * FROM Orders")
    return results.recordset;
}