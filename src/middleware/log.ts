import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('-------------------------');
  const header = req.headers;
  const userAgent = header['user-agent']
  console.log(userAgent);
  console.log('-------------------------');
  next(); // Sirve para moverse al siguente middleware
};

export { logMiddleware };