import mongoose from 'mongoose'

const { Schema, model, SchemaTypes } = mongoose

const schema = new Schema({

     username: SchemaTypes.String,
     lastname: SchemaTypes.String,
     firstname: SchemaTypes.String,
     password: SchemaTypes.String,
     confesions: [{
          isPublic: SchemaTypes.Boolean,
          destinataryId: SchemaTypes.ObjectId,
          body: SchemaTypes.String,
          date: SchemaTypes.Date
     }]

})

export default model('document', schema)