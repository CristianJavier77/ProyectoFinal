import { app } from '../index.js'
import express from 'express'
import logWithCredentials from '../controllers/logWithCredentials.js'
import logWithToken from '../controllers/logWithToken.js'
import sign from '../controllers/sign.js'

function authRoute() {
     const router = express.Router()
     router.post('/api/log/credentials', logWithCredentials)

     router.post('/api/log/token', logWithToken )

     router.post('/api/sign', sign)
     return router
}
export default authRoute