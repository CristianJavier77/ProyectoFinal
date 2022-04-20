import DocumentModel from './models/model.js'
import jwt from 'jsonwebtoken'

class Auth {

     createToken({ username, password }) {
          
          const user = {
               username,
               password
          }
         
          const token = jwt.sign({ user }, 'BRANDOX-SECRETKEY')


          return { token }
     }

     async createTokenWithExistingUser({ username, password }) {

          const filter = { username, password };
          const documentFinded = await DocumentModel.findOne(filter);
         
          if (documentFinded) {
               
               const token = jwt.sign({ username, password }, 'BRANDOX-SECRETKEY')
               return { token, document: documentFinded }
          }
          return { token: null };
     }

     async verifyToken(token) {
          if (token) {
               try {
                    
                    const { username } = jwt.verify(token, 'BRANDOX-SECRETKEY')
                    const registro = await DocumentModel.findOne({ username })
                   
                    return { authData: registro };
               } catch (error) {
                    console.log(error)
                    return { authData: null };
               }
          } else return { authData: null }
     }
}

export default new Auth()