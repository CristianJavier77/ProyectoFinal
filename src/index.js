import express from 'express'
import initDatabase from './config/mongodb.js'
import authRoutes from './routes/auth.js'
import confesionRoute from './routes/confesionRoute.js'
import dotenv from 'dotenv'
export const app = express()

dotenv.config()

app.set('PORT', process.env.PORT || 5000)

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use(
     authRoutes(),
     confesionRoute()
)

app.listen(app.get('PORT'), () => {
     console.log('Server is running in port ' + app.get('PORT'))
     initDatabase()
})