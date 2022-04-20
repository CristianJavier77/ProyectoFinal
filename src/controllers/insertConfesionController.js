import confesionModel from '../models/model.js'

async function insertConfesionController(req, res) {

   const {
      id,
      confesion
   } = req.body
   // buscamos el registro de confesion en la base de datos de datos
   const confesionOfDatabase = await confesionModel.findById(id)
   // armamos un array con la confesion ya agregada
   const newConfesionArray = [...confesionOfDatabase.confesions, confesion]

   const confesionUpdated = await confesionModel.findByIdAndUpdate(id,
      { $set: { confesions: newConfesionArray } }, { new: true })

   res.json({
      error: null,
      data: confesionUpdated
   })

}

export default insertConfesionController