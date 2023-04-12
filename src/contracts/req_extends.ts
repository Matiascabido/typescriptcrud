import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface RequestExtend extends Request {
  user?:  JwtPayload | { id: string };
}

