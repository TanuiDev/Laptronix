import dotenv from "dotenv";
import { getPool } from "./db/config";
import app from "./index";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on PORT:${port}`);
});

getPool()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error: any) => {
    console.log("Database connection failed", error);
  });
