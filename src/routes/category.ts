import { Router } from 'express'
import { getCategories,createCategory,deleteCategory,getCategoryById,updateCategory } from '../controllers/categoryController'

const router = Router()

router.get('/', getCategories)
router.get('/:id', getCategoryById)
router.post('/', createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)



export default router