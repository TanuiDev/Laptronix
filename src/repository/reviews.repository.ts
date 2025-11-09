import { getPool } from "../db/config";

export const getAllReviews = async () => {
  const pool = await getPool();
  const result = await pool.query("SELECT * FROM Reviews");
  return result.recordset;
};


export const getReviewById = async (reviewId: number) => {
  const pool = await getPool();
  const result = await pool
  .request()
  .input("reviewId", reviewId)
  .query("SELECT * FROM Reviews WHERE reviewId = @reviewId    ");
  return result.recordset[0];
};