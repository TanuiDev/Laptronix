import { getPool } from "../db/config";

export const getAllReviews = async () => {
  const pool = await getPool();
  const result = await pool.query("SELECT * FROM Reviews");
  return result.recordset;
};


