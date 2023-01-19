import { Schema, model } from 'mongoose'
import { Product } from './product'


interface IPay {
    products:[{ type: Schema.Types.ObjectId, ref: 'Product' }],
    client: string
    user: { type: Schema.Types.ObjectId, ref: 'User' }
    total: number,
    cupon_discount: string
    idCompra: string,
    created_at: Date
}

const paySchema = new Schema<IPay>({
	products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
	client: { type: String, required: false },
	total: { type: Number, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	cupon_discount: {type: String, required: false},
	idCompra: {type: String, required: false, default: Date.now().toString()},
	created_at: {type: Date, default: Date.now()},
})

paySchema.methods.toJSON = function(){
	// eslint-disable-next-line no-unused-vars
	const {__v, ...pay} = this.toObject()

	return pay
}

export const Pay = model<IPay>('Pay', paySchema)