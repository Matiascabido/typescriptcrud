import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;

/**
 * Funcion que permite crear el almacenamiento de archivos,
 * de forma local.
 */
const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage }); // middleware necesario para el manejo de archivos, mediante form-data

export default multerMiddleware;