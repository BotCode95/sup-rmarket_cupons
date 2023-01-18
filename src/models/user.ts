import {Schema, model} from 'mongoose'

interface IUser {
    name?: string,
    lastName?: string,
    email: string,
    password: string
    role: string,
    status: boolean
}

const userSchema = new Schema<IUser>({
	name: {type:String, required: false},
	lastName: {type:String, required: false},
	email: {type:String, required: false},
	password: {type:String, required: false},
	role: {type: String,default: 'USER_ROLE',enum: ['ADMIN_ROLE','USER_ROLE']},
	status: {type: Boolean,default: true},
})


userSchema.methods.toJSON = function() {
	const {__v,password, ...user} = this.toObject()

	return user
}

export const User = model<IUser>('User', userSchema)