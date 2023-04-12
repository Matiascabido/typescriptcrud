import { Request, Response } from "express"
import { handlerHttp } from "../utils/error.handler";
import { insertCar, getCar, getCars, updateCar, deleteCar} from "../services/car.services";

const getCarById = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const car = await getCar(id);
    res.send(car)
  } catch (e) {
    handlerHttp(res, "ERROR_GET_ITEM", e)
  }
}

const getAllCar = async (req: Request, res: Response) => {
  try {
    const items = await getCars();
    res.send(items)
  } catch (e) {
    handlerHttp(res, "ERROR_GET_ITEMS", e)
  }
}

const createCar = async ({ body }: Request, res: Response) => {
  try {
    const resItem = await insertCar(body);
    res.send(resItem)
  } catch (e) {
    console.log(e);
    handlerHttp(res, "ERROR_CREATE_ITEM", e)
  }
}

const updateCarById = async ({params, body}: Request, res: Response) => {
  try {
    const { id } = params;
    const updatedCar = await updateCar(id, body)
    res.send(updatedCar)
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_ITEM", e)
  }
}

const deleteCarById = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const deletedCar = await deleteCar(id)
    return res.send(deletedCar);
  } catch (e) {
    handlerHttp(res, "ERROR_DELET_ITEM", e)
  }
}


export {
  getCarById,
  getAllCar,
  createCar,
  updateCarById,
  deleteCarById
}