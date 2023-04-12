import { Car } from "../contracts/car.interface";
import ItemModel from "../models/item";

const getCar = async (id: string) => {
  const response = await ItemModel.find({_id: id})
  return response;
};

const getCars = async () => {
  const response = await ItemModel.find({})
  return response;
};

const insertCar = async (item: Car) => {
  const response = await ItemModel.create(item)
  return response;
};

const updateCar = async (id:string, item: Car) => {
  const response = await ItemModel.findByIdAndUpdate({ _id: id}, item, { new: true})
  return response;
};

const deleteCar = async (id: string) => {
  const response = await ItemModel.findByIdAndRemove({ _id: id })
  return response;
};


export { insertCar, getCar, getCars, updateCar, deleteCar};