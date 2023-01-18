import { Request,Response } from 'express'
import {Product} from '../models/product'


export const getProducts = async (req: Request,res: Response) => {
	const {idUser} = req.query
	if(idUser){
		const products = await Product.find({user: idUser}).populate('category', 'name').populate('user', 'email')
		res.json({products})
	}else{

		const products = await Product.find().populate('category', 'name')
		res.json({products})
	}
}


export const getProductById = async (req: Request,res: Response) =>  {
	const {id} = req.params
	try {
		const product = await Product.findById(id)

		res.json({
			product
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({msg: error})
	}
}

export const createProduct = async (req: Request,res: Response) => {
	const {name,description,price_unit, image,barcode,stock,category, total, user,discount} = req.body
	try {
		const product = new Product({name,description,price_unit, image,barcode,stock,category, total, user,discount})

		await product.save()

		res.json({
			msg: 'product Creado',
			product
		})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const updateProduct = async (req: Request,res: Response) => {
	const {id} = req.params
	// eslint-disable-next-line no-unused-vars
	const {_id, ...resto} = req.body
	try {
		const product = await Product.findByIdAndUpdate(id, resto, { new: true })
		res.json({product})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const deleteProduct = async (req: Request,res: Response) => {
	const {id} = req.params
	try {
		const product = await Product.findByIdAndDelete(id)
		res.json({product})
	} catch (error) {
		res.status(400).json({ msg: error})
	}
}
