import { Car } from "../contracts/car.interface";
import CarModel from "../models/car";

const getCar = async (id: string) => {
  const response = await CarModel.find({_id: id})
  return response;
};

const getCars = async () => {
  const response = await CarModel.find({})
  return response;
};

const insertCar = async (item: Car) => {
  const response = await CarModel.create(item)
  return response;
};

const updateCar = async (id:string, item: Car) => {
  const response = await CarModel.findByIdAndUpdate({ _id: id}, item, { new: true})
  return response;
};

const deleteCar = async (id: string) => {
  const response = await CarModel.findByIdAndRemove({ _id: id })
  return response;
};


export { insertCar, getCar, getCars, updateCar, deleteCar};