import { Request,Response } from 'express'
import { Cupon } from '../models/cupon'


export const createCupon = async (req: Request,res: Response) => {
	const {name, stock, status, discount}  = req.body
	try {
		const cupon = new Cupon({name, stock, status, discount})

		await cupon.save()

		res.json({
			msg: 'Cupon Create',
			cupon
		})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const getCupons = async (req: Request,res: Response) => {
	const {name} = req.query
	try {
		const cupon  = await Cupon.findOne({name})
		if(name){
			if(cupon && cupon.stock > 0){
				cupon.stock--
				await cupon.save()
				res.json({
					'cupon_name':cupon.name,
					'discount': cupon.discount
				})
			}else {
				throw new Error('El cupon ha sido agotado')
			}
		}else {
			const cupons = await Cupon.find()
			res.json({cupons})
			
		}
	} catch (error: any) {
		console.log(error)
		res.status(400).json({msg: error.message})
	}
}

export const getCuponById = async (req: Request,res: Response) =>  {
	const {name} = req.query
	console.log('name', name)
	try {
		const cupon  = await Cupon.findOne({name})
		if(cupon){
			cupon.stock--
			await cupon.save()
		}
		res.json({
			'cupon_name':cupon?.name
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({msg: error})
	}
}