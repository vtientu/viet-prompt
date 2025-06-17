import authRouter from '@/routers/auth.route.js'
import categoryRouter from '@/routers/category.route.js'
import packageRouter from '@/routers/package.route.js'
import paymentRouter from '@/routers/payment.route.js'
import promptRouter from '@/routers/prompt.route.js'
import uploadRouter from '@/routers/upload.route.js'
import userRouter from '@/routers/user.route.js'
import express from 'express'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/prompt', promptRouter)
router.use('/category', categoryRouter)
router.use('/upload', uploadRouter)
router.use('/payment', paymentRouter)
router.use('/package', packageRouter)

export default router
