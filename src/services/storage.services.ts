import StorageModel from "../models/storage";
import { Storage } from "../contracts/storage.interface";

const uploadFile = async ({fileName, idUser, path }:Storage) => {
  const response = await StorageModel.create({fileName, idUser, path})
  return response;
};


export { uploadFile };