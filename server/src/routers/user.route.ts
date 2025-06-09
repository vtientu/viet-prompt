import { Router } from 'express'
import UserController from '@/controllers/user.controller.js'
import { authentication } from '@/auth/authMiddleware.js'
import asyncHandler from '@/helpers/asyncHandler.js'

const userRouter = Router()

userRouter.use(authentication)
userRouter.get('/profile', asyncHandler(UserController.getProfile))

export default userRouter
