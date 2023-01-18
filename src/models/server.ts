import express, {Application} from 'express'
import cors from 'cors'

import {dbConnection} from '../database/config'
import productRoutes from '../routes/product'
import categoryRoutes from '../routes/category'
import cuponRoutes from '../routes/cupon'
import userRoutes from '../routes/user'
import authRoutes from '../routes/auth'
import roleRoutes from '../routes/role'
export class Server {
	private app: Application
	private port: string | undefined
	private apiPaths = {
		productsPath: '/api/products',
		categoriesPath: '/api/categories',
		cuponPath: '/api/cupons',
		authPath: '/api/auth',
		rolePath: '/api/role',
		userPath: '/api/users'
	}
	constructor() {
		this.app = express()
		this.port = process.env.NODE_ENV === 'dev' ? process.env.PORT_DEVELOPMENT : process.env.PORT
		this.conectarDB()
		this.middlewares()
		this.routes()
	}


	async conectarDB() {
		await dbConnection()
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
	}

	routes() {
		this.app.use(this.apiPaths.productsPath, productRoutes)
		this.app.use(this.apiPaths.categoriesPath, categoryRoutes)
		this.app.use(this.apiPaths.cuponPath, cuponRoutes)
		this.app.use(this.apiPaths.authPath, authRoutes)
		this.app.use(this.apiPaths.userPath, userRoutes)
		this.app.use(this.apiPaths.rolePath, roleRoutes)
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Servidor Corriendo en el puerto ${this.port}`)
		})
	}
}