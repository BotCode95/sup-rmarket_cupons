import { Schema, model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
interface ICategory {
	name: string
	descripcion?: string
}


// 2. Create a Schema corresponding to the document interface.
const categorySchema = new Schema<ICategory>({
	name: { type: String, required: true },
	descripcion: { type: String, required: false }
})

categorySchema.methods.toJSON = function(){
	// eslint-disable-next-line no-unused-vars
	const {__v, ...category} = this.toObject()

	return category
}

// 3. Create a Model.
export const Category = model<ICategory>('Category', categorySchema)