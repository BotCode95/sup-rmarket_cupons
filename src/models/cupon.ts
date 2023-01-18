import { Schema, model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
interface ICupon {
	name: string
	stock: number
    status: boolean
    discount: number
}



const cuponSchema = new Schema<ICupon>({
	name: { type: String, required: true },
	stock: { type: Number, required: false, default: 2 },
	status: { type: Boolean, required: false },
	discount: { type: Number, required: false }
})

cuponSchema.methods.toJSON = function(){
	// eslint-disable-next-line no-unused-vars
	const {__v, ...cupon} = this.toObject()

	return cupon
}

// 3. Create a Model.
export const Cupon = model<ICupon>('Cupon', cuponSchema)