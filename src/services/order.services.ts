import OrderModel from "../models/item";

const getOrders = async (id: string) => {
  const response = await OrderModel.find({})
  return response;
};


export { getOrders };