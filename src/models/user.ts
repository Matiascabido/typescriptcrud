import {Schema, model} from "mongoose";
import { User } from "../contracts/user.interface";

/**
 * Se declara el esquema de un User, 
 */
const UserScheme = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      default: "Descripcion por defecto"
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

/**
  * Se crea un Modelo de Usuario
*/

const UserModel = model('users', UserScheme)

export default UserModel;