import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";
import { RequestExtend } from "../contracts/req_extends";


const isJwtExist = (req: RequestExtend, res: Response, next: NextFunction) => {
  try {
    const userJwt = req.headers.authorization || ''
    /**
    * Al ser un string y siempre estar dividido por un 'espacio' entre Bearer 
    * y el token, con las funciones 'split' y 'pop' podemos obtener directamente el JWT 
    */ 
    const jwt = userJwt.split(' ').pop()
    const isValidToken = verifyToken(`${jwt}`) as { id: String } // Se espera que el jwt, sea siempre un string
    if (!isValidToken) {
      res.status(401)
      res.send('SESSION_INVALID')
    } else {
      req.user = isValidToken
      next()
    }
  } catch (error) {
    res.status(402)
    res.send('SESSION_INVALID')
  }

}

export { isJwtExist };



/**
  * split: Divide el stirng, tantas veces como aparezca el simbolo a ubicar.
  * pop: Quita y retorna el ultimo elemento del arreglo.
 */