import {Schema, model} from "mongoose";
import { Car } from "../contracts/car.interface";

/**
 * Se declara el esquema de un Car, basado en la interface / contrato de auto
 * Y se solicita que todos sus datos sean obligatorios.
 */
const CarScheme = new Schema<Car>(
  {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    gas: {
      type: String,
      enum: ["gasolina", "electric"], 
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true, // se crea automaticamente el updatedAt y createdAt
    versionKey: false // se le quita el versinado al registro
  }
)

/**
  * Se crea un Modelo de Cars
*/

const CarModel = model('items', CarScheme)

export default CarModel;