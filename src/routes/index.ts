import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`; // Retorna la ruta del directorio acutal ./src/routes
const router = Router()

/**
 * items.ts => items 
 * @returns 
 */

const cleanFileName = ( fileName: string ) => fileName.split('.').shift()

readdirSync(PATH_ROUTER) // Va a leer cuantos y cuales son los archivos que existe en x directorio
  .filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if (cleanName !== 'index') {
      /**
        Esto genera una importacion dinámica, 
        lo que permite importar solo los archivos a utilizar
       */
      import(`./${cleanName}`).then((moduleRouter) => {
        router.use(`/${cleanName}`, moduleRouter.router)
      })
    }
  });

export { router };