import { Router } from "express";
import { getFile } from "../controllers/file";
import multerMiddleware from "../middleware/file";
import { isJwtExist } from "../middleware/session";

const router = Router()

/**
  * Esta ruta solo puede ser accedida por personas que tienen session activa!
  * Tienen que tener un JWT valido!
  * http://localhost:3002/orders
  * @name 'myfile' Es necesario que este nombre sea el que se coloca como key al archivo.
  */

router.post('/', isJwtExist, multerMiddleware.single('myfile'), getFile)

export { router };