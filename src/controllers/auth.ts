import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth.services";

const registerCtrl = async  ({ body }: Request, res: Response) => {
  const newUser = await registerNewUser(body)
  res.send(newUser);
}


const loginCtrl = async ({ body }: Request, res: Response) => {
  const { password, email } = body; 
  const isLogin = await loginUser({ password, email })
  if (!isLogin || isLogin === 'INCORRECT_PASSWORD') {
    res.status(403); // Forbidden
    res.send(isLogin);
  } else {
    res.send(isLogin)
  }
}


export {
  registerCtrl,
  loginCtrl
}