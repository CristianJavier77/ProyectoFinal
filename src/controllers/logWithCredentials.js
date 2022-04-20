import Auth from '../Auth.js'
import DocumentModel from '../models/model.js'


async function logWithCredentials(req, res) {
     const { username, password } = req.body

     // validating the data received
     if (username == null || password == null) {
          return res.status(400).json({
               error: { message: 'The data received is not in correct format', errorCode: 400 },
               data: null
          })
     }

     const { token, document } = await Auth.createTokenWithExistingUser({ username, password })
     if (!document) {
          res.status(404).json({
               error: { message: 'The credentials received are invalid', errorCode: 404 },
               data: null
          })
     }
     const { _id, confesions, lastname, firstname } = document
          try {
               if (token) {
                    return res.status(200).json({
                         error: null,
                         data: { token, isAuth: true, data: { _id, username: document.username, confesions, lastname, firstname } }
                    })
               } else return res.status(404).json({
                    error: { message: 'The credentials received are invalid', errorCode: 404 },
                    data: null
               })
          }
          catch (error) {
               console.log(error);
               res.status(500).json({
                    error: { message: error.message, errorCode: 500 },
                    data: null
               })
          }

     }

     export default logWithCredentials