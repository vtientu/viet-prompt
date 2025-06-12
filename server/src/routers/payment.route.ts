import { authentication } from '@/auth/authMiddleware.js'
import PaymentController from '@/controllers/payment.controller.js'
import asyncHandler from '@/helpers/asyncHandler.js'
import { Router } from 'express'

const paymentRouter = Router()

// Routes công khai cho callback từ VNPay
paymentRouter.get('/vnpay-return', asyncHandler(PaymentController.vnpayReturn))
paymentRouter.get('/vnpay-ipn', asyncHandler(PaymentController.vnpayIpn))

paymentRouter.use(authentication)
paymentRouter.post('/create', asyncHandler(PaymentController.createPayment))

export default paymentRouter
