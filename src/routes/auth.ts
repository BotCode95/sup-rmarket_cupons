import {Router} from 'express'
import {check} from 'express-validator'
import {login, validarTokenUsuario} from '../controllers/authController'
import {validarJWT} from'../middlewares/validar-jwt'

const router = Router()

router.get('/',[
	validarJWT
], validarTokenUsuario )
router.post('/login', [
	check('email', 'El correo es obligatorio').isEmail(),
	check('password', 'La contraseña es obligatoria').not().isEmpty(),
], login)



export default router