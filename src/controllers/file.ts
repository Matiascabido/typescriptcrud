import { Response } from "express"
import { handlerHttp } from "../utils/error.handler";
import { uploadFile } from "../services/storage.services";
import { RequestExtend } from "../contracts/req_extends";
import { Storage } from "../contracts/storage.interface";

const getFile = async (req: RequestExtend, res: Response) => {
  try {
    const { user, file } = req;
    console.log(file);
    //const response = await uploadFile()
    const data: Storage = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      idUser: `${user?.id}`
    }
    const response = await uploadFile(data)
    res.send(response)
  } catch (e) {
    handlerHttp(res, "ERROR_GET_FILE", e)
  }
}

export { getFile }