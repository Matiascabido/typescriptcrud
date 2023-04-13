import { Router } from "express";
import { registerCtrl, loginCtrl, updateCtrl } from '../controllers/auth';
import multerMiddleware from "../middleware/file";
const router = Router()


/** http://localhost:3002/auth/register */
router.post('/register', registerCtrl)

/** http://localhost:3002/auth/login */
router.post('/login', loginCtrl)

/** http://localhost:3002/auth/update */
router.post('/update/:id',  multerMiddleware.single('avatar'), updateCtrl)

export { router };