import { authentication } from '@/auth/authMiddleware.js'
import AuthController from '@/controllers/auth.controller.js'
import asyncHandler from '@/helpers/asyncHandler.js'
import { Router } from 'express'
const authRouter = Router()

authRouter.post('/login', asyncHandler(AuthController.login))
authRouter.post('/register', asyncHandler(AuthController.register))

/** --------Authentication--------- */
authRouter.use(authentication)
authRouter.post('/refresh-token', asyncHandler(AuthController.refreshToken))
authRouter.post('/logout', asyncHandler(AuthController.logout))

export default authRouter
