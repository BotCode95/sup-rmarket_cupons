import { Schema, model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
export interface IProduct {
	name: string
	description: string
	price_unit: number
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	total?: number
	stock: number
	image?: string
	barcode?: string
	discount: number
	created_at: Date,
	modified_at: Date
}


// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProduct>({
	name: { type: String, required: true },
	description: { type: String, required: false },
	price_unit: { type: Number, required: true },
	total: { type: Number, required: false, default: 0 },
	stock: { type: Number, required: true, default: 5},
	image: { type: String, required: false },
	barcode: { type: String, required: false },
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	created_at: {type: Date, default: Date.now()},
	modified_at: {type: Date, default: Date.now()}
})

productSchema.methods.toJSON = function(){
	// eslint-disable-next-line no-unused-vars
	const {__v, ...product} = this.toObject()

	return product
}

// 3. Create a Model.
export const Product = model<IProduct>('Product', productSchema)