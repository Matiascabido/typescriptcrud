import { Router } from "express";
import { getItems } from "../controllers/order";
import { isJwtExist } from "../middleware/session";

const router = Router()

/**
  * Esta ruta solo puede ser accedida por personas que tienen session activa!
  * Tienen que tener un JWT valido!
  * http://localhost:3002/orders
  */

router.get('/', isJwtExist, getItems)

export { router };