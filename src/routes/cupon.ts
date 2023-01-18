import { createCupon,getCuponById,getCupons} from '../controllers/cuponController'
import { Router } from 'express'


const router = Router()
router.get('/', getCupons)
router.get('/:id', getCuponById)
router.post('/', createCupon)


export default router