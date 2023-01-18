import { Request,Response } from 'express'
import { generarJWT } from '../utils/generar-jwt'
import bcryptjs from 'bcryptjs'
import { User } from '../models/user'

export const login = async (req:Request, res: Response) => {
	const {email, password} =req.body

	try {

		const user = await User.findOne({email})
		if(!user){
			return res.status(400).json({
				msg: 'Email / passsword no son correctos - correo'
			})
		}

		if(!user.status){
			return res.status(400).json({
				msg: 'El usuario se encuentra con estado desactivado'
			})
		}

		const validPassword = bcryptjs.compareSync(password, user.password)
		if(!validPassword){
			return res.status(400).json({
				msg: 'La contraseña es incorrecta'
			})
		}
		
		//generar jwt
		const token = await generarJWT(user.id)

		res.json({
			user, 
			token
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			msg: 'Hable con el administrador'
		})
	}
}

export const validarTokenUsuario = async (req:Request, res:Response ) => {
	// Generar el JWT
	const token = await generarJWT( (<any>req).user._id )

    
	res.json({
		user: (<any>req).user,
		token: token,
	})

}