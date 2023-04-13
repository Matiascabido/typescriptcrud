import { Request, Response } from "express"
import { registerNewUser, loginUser, updateUserAvatar } from "../services/auth.services";
import { RequestExtend } from "../contracts/req_extends";
import { Storage } from "../contracts/storage.interface";
import { uploadFile } from "../services/storage.services";
import { handlerHttp } from "../utils/error.handler";

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

const updateCtrl = async (req: RequestExtend, res: Response) => {
  try {
    const { file, params } = req;
    const data: Storage = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      idUser: `${params?.id}`
    }
    const id = params?.id ?? ''
    const { fileName: avatar } = await uploadFile(data)
    await updateUserAvatar({id, avatar})
    res.send('USER_UPDATED')
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_AVATAR", e)
  }
  
}


export {
  registerCtrl,
  loginCtrl,
  updateCtrl
}