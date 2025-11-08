import * as ordersRepository from "../repository/orders.repository";

export const fetchAllOrders = async () => {
    const orders = await ordersRepository.getAllOrders();
    return orders;
};