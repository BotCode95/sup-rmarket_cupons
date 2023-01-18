import { Request,Response } from 'express'
import {Category} from '../models/category'


export const createCategory = async (req: Request,res: Response) => {
	const {name,descripcion}  = req.body
	try {
		const category = new Category({name,descripcion})

		await category.save()

		res.json({
			msg: 'category Creado',
			category
		})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const getCategories = async (req: Request,res: Response) => {
    
	const categories = await Category.find()
	res.json({categories})
}

export const getCategoryById = async (req: Request,res: Response) =>  {
	const {id} = req.params
	try {
		const category = await Category.findById(id)

		res.json({
			category
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({msg: error})
	}
}

export const updateCategory = async (req: Request,res: Response) => {
	const {id} = req.params
	const {_id, ...resto} = req.body
	try {
		const category = await Category.findByIdAndUpdate(id, resto, { new: true })
		res.json({category})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const deleteCategory = async (req: Request,res: Response) => {
	const {id} = req.params
	try {
		await Category.findByIdAndDelete(id)
		res.json({msg: 'Categoria eliminada'})
	} catch (error) {
		res.status(400).json({ msg: error})
	}
}
