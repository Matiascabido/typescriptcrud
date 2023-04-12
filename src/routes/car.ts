import { Router } from "express";
import { getCarById, getAllCar, createCar, updateCarById, deleteCarById } from "../controllers/cars";
import { isJwtExist } from "../middleware/session";

const router = Router()

/**
  * http://localhost:3002/items
  */
router.get('/', getAllCar)

router.get('/:id', getCarById)

router.post('/', isJwtExist, createCar)

router.put('/:id', isJwtExist, updateCarById)

router.delete('/:id', isJwtExist, deleteCarById)


export { router };