import { Types } from 'mongoose'

export interface IPayment {
  userId: Types.ObjectId
  currency: string
  paymentMethod: 'vnpay'
  status: 'pending' | 'success' | 'failed' | 'cancelled' | 'refunded'
  transactionCode: string
  paidAt: Date
  note: string
  createdAt: Date
  updatedAt: Date
}
