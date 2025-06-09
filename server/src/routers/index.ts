import authRouter from '@/routers/auth.route.js'
import userRouter from '@/routers/user.route.js'
import express from 'express'
const router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)

export default router
