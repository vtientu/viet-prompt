import { Types } from 'mongoose'

export interface IPayment {
  user: Types.ObjectId
  amount: number
  method: 'bank'
  status: 'success' | 'pending' | 'failed'
  createdAt: Date
  updatedAt: Date
}
