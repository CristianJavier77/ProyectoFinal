import Auth from '../Auth.js'
import DocumentModel from '../models/model.js'


async function sign (req, res) {
   const { username, password, firstname, lastname } = req.body

   // validating the data received
   if (username == null || password == null || firstname == null || lastname == null) {
        return res.status(400).json({
             error: { message: 'The data received is not correct', errorCode: 400 },
             data: null
        })
   }
   try {
        const created = await DocumentModel({ username, password, firstname, lastname }).save()

        if (created) {
             const { token } = Auth.createToken({ username, password })
             return res.status(200).json({
                  error: null,
                  data: { token, data: created }
             })
        } else {
             return res.status(500).json({
                  error: { message: error.message, errorCode: 500 },
                  data: null
             })
        }

   } catch (error) {
        console.log(error);
        return res.status(500).json({
             error: { message: error.message, errorCode: 500 },
             data: null
        })
   }
}

export default sign