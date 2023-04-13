import {Schema, model} from "mongoose";
import { User } from "../contracts/user.interface";

/**
 * Se declara el esquema de un User, 
 */
const UserScheme = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
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