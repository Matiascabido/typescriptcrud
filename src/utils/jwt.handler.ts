import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret.default.01"

const singnToken = async ( id: string ) => {
  const jwt = sign({ id }, JWT_SECRET,{
    expiresIn:"1h"
  }) 
  return jwt
}


const verifyToken = (token: string) => {
  const isCorrect = verify(token, JWT_SECRET)
  return isCorrect;
}


export { singnToken, verifyToken }