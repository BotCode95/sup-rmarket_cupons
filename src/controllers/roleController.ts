import { Request,Response } from 'express'
import { Role } from '../models/role'


export const createRole = async (req: Request,res: Response) => {
	const {role}  = req.body
	try {
		const roleCreate = new Role({role})

		await roleCreate.save()

		res.json({
			msg: 'Role Create',
			roleCreate
		})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const getRoles =async (req: Request,res: Response) => {
	const roles = await Role.find()
	res.json({roles})
}