import { Auth } from "../contracts/auth.interface";
import { User } from "../contracts/user.interface";
import UserModel from "../models/user";
import { encrypt, verify } from "../utils/encrypter.handler";
import { singnToken } from "../utils/jwt.handler";

const registerNewUser = async ( { email, password, name }: User ) => {
  const checkExist = await UserModel.findOne({ email})
  if (checkExist) return 'ALREADY_CREATED';
  const pass = await encrypt(password) // se encripta la contraseña
  const newUser = await UserModel.create({ email, password: pass, name })
  return newUser
}

const loginUser = async ({ email, password }: Auth) => {
  const checkExist = await UserModel.findOne({email})
  if (!checkExist) return 'USER_NOT_FOUND';
  const { password: passwordHash, name, email: userEmail, description, _id: userId } = checkExist; // Contraseña que se recupera de la db si el usuario existe
  const isMatch = await verify(password, passwordHash)
  if (!isMatch) return 'INCORRECT_PASSWORD';
  const token = await singnToken(email)
  return {
    token,
    user: {
      _id: userId,
      name,
      email: userEmail,
      description,
    }
  }
}


export { registerNewUser, loginUser };