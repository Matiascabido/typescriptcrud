import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const passHashed = await hash(password, 12)
  return passHashed
}

const verify = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash)
  return isCorrect
}


export { encrypt, verify };