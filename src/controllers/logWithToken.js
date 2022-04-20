import Auth from '../Auth.js'


async function logWithToken(req, res) {
     const { token } = req.body
     console.log('entro')
     // validating the data received
     if (token == null) {
          return res.status(400).json({
               error: { message: 'The token has not been received', errorCode: 400 },
               data: null
          })
     }
     try {

          const { authData } = await Auth.verifyToken(token)
          const { _id, username, confesions, firstname, lastname } = authData
          console.log(authData)
          if (authData) {
               return res.status(200).json({
                    error: null,
                    data: { isAuth: true, data: { _id, username, confesions, firstname, lastname } }
               })
          } else return res.status(404).json({
               error: { message: 'The token received are not valid', errorCode: 404 },
               data: null
          })
     } catch (error) {
          console.log(error);
          return res.status(500).json({
               error: { message: error.message, errorCode: 500 },
               data: null
          })
     }

}

export default logWithToken