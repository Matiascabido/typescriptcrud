import { Response } from "express"
import { handlerHttp } from "../utils/error.handler";
import { RequestExtend } from "../contracts/req_extends";



const getItems = async (req: RequestExtend, res: Response) => {
  try {
    res.send({
      data: "Esta informacion solo es valida para si JWT es valido",
      user: req.user
    })
  } catch (e) {
    handlerHttp(res, "ERROR_GET_ITEM", e)
  }
}

export { getItems };