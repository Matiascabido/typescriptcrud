import {Schema, model} from "mongoose";
import { Storage } from "../contracts/storage.interface";

/**
 * Se declara el esquema de almacenamiento.
 */
const StorageScheme = new Schema<Storage>(
  {
    fileName: {
      type: String
    },
    path: {
      type: String
    },
    idUser: {
      type: String
    }
  },
  {
    timestamps: true, // se crea automaticamente el updatedAt y createdAt
    versionKey: false // se le quita el versinado al registro
  }
)

/**
  * Se crea un Modelo de Storage
*/

const StorageModel = model('storage', StorageScheme)

export default StorageModel;