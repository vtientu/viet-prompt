import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

export default app
