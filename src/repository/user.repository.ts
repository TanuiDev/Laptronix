import { getPoll } from "../db/config";


export const getAllUsers = async ()=>{
    const pool = await getPoll();
    const results = await pool.request().query("SELECT * FROM Users")
    
    return results.recordset
}