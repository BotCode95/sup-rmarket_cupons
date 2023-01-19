import { Router } from 'express'
import { createPay } from '../controllers/payController'

const router = Router()

router.post('/', createPay)



export default router