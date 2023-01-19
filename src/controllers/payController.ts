import { Request,Response } from 'express'
import {Pay} from '../models/pay'
import { IProduct, Product } from '../models/product'
import { Cupon } from '../models/cupon'


export const createPay = async (req: Request,res: Response) => {
	const {products,total, cupon_discount, client, user}  = req.body
	try {

		if(products){
			let totalProducts = products.map((product: IProduct) => product.total).reduce((a: number,b: number) => a+b)
			if(cupon_discount?.length > 0){
				const cupon = await Cupon.findOne({name: cupon_discount})
				const discount = (totalProducts * (cupon?.discount ?? 0))/100
				totalProducts -= discount
			}
			if(totalProducts  === total){
				const pay = new Pay({products,total, cupon_discount, client, user})

				await pay.save()
        
				res.json({
        
					msg: 'Pay succesfully',
					idCompra: pay.idCompra
				})
                
			}else {
				throw new Error('El total es incorrecto')
			}

		}
	
	} catch (error: any) {
        
		res.status(400).json({ msg: error.message})
	}
}
