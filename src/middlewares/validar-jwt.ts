import { NextFunction, Request,Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import {User} from '../models/user'

export const validarJWT = async (req:Request,res:Response,next:NextFunction)=> {
	const token = req.header('x-token')

	if(!token) {
		return res.json({
			msg: 'no hay token en la petición'
		})
	}

	try {
		const secret:string = process.env.SECRETORPRIVATEKEY ?? ''
		// const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
		const {uid}:  any = jwt.verify(token,secret)
		const user = await User.findById(uid)

		if(!user) {
			return res.status(401).json({
				msg: 'Usuario no existe en DB'
			})
		}

		if(!user.status) {
			return res.status(401).json({
				msg: 'Usuario desactivado'
			})
		}

		
		(<any>req).user = user
		next()
        
	} catch (error) {
		console.log(error)
		res.status(401).json({
			msg: 'Token no válido'
		})
	}
}

