import { Request, Response } from "express";
import * as ordersService from "../service/orders.service";

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await ordersService.fetchAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}