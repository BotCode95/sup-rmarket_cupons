import { Role } from '../models/role'

export const isRoleValidate = async (role = 'USER_ROLE') => {
	const existeRol = await Role.findOne({role})
	if(!existeRol) {
		throw new Error(`El rol ${role} no está registrado en la BD`)
	}
}
