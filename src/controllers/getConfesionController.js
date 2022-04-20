import confesionModel from '../models/model.js'

async function getConfesionController(req, res) {

   const { username } = req.query

   if (username) {
      const confesiones = await confesionModel.find({ username: { $regex: username } })
      res.json({
         error: null,
         data: confesiones
      })
   }

   const confesiones = await confesionModel.find({})
   res.json({
      error: null,
      data: confesiones
   })

}

export default getConfesionController
