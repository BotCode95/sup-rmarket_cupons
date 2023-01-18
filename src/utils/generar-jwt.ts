import jwt from 'jsonwebtoken'

export const generarJWT = ( uid = '' ) => {

	return new Promise( (resolve, reject) => {

		const payload = { uid }
		const secret:string = process.env.SECRETORPRIVATEKEY ?? ''
		jwt.sign( payload, secret, {
			expiresIn: '7d'
		}, ( err, token ) => {
			if ( err ) {
				console.log(err)
				reject( 'No se pudo generar el token' )
			} else {
				resolve( token )
			}
		})

	})
}


