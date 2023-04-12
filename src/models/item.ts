import {Schema, model} from "mongoose";
import { Car } from "../contracts/car.interface";

/**
 * Se declara el esquema de un Item, basado en la interface / contrato de auto
 * Y se solicita que todos sus datos sean obligatorios.
 */
const ItemScheme = new Schema<Car>(
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
  * Se crea un Modelo de Items
*/

const ItemModel = model('items', ItemScheme)

export default ItemModel;