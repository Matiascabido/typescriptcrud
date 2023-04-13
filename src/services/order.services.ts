import OrderModel from "../models/car";

const getOrders = async (id: string) => {
  const response = await OrderModel.find({})
  return response;
};


export { getOrders };