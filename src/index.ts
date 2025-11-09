import express, { json } from "express";
import { userRoutes } from "./router/user.router";
import { productsRoutes } from "./router/products.routers";
import { ordersRoutes } from "./router/orders.router";
import { reviewsRoutes } from "./router/reviews.routes";

const initiallizeAPP = () => {
  const app = express();

  app.use(express.json());

  userRoutes(app);
  productsRoutes(app);
  ordersRoutes(app);
  reviewsRoutes(app);
  return app;
};

const app = initiallizeAPP();

export default app;
