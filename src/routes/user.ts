import { Router } from 'express'
import { check } from 'express-validator'
import { isRoleValidate } from '../utils/validators'
import {validarJWT} from '../middlewares/validar-jwt'
import {createUser, getUsers, getUserById, updateUser, deleteUser} from '../controllers/userController'

const router = Router()
router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', [
	check('name', 'El nombre es obligatorio').not().isEmpty(),
	check('lastName', 'El apellido es obligatorio').not().isEmpty(),
	check('password', 'La contrasela debe ser mayor a 6 caracteres').isLength({min: 6}),
	check('email', 'El correo no es válido').isEmail(),
	check('role').custom(isRoleValidate),
], createUser)
router.put('/:id', [
	check('role').custom(isRoleValidate),
],updateUser)
router.delete('/:id', [
	validarJWT,
],deleteUser)

export default router