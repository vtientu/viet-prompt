// TypeScript/Mongoose Schema cho collection payments

import { IPayment } from '@/interfaces/payment.interface.js'
import { Document, model, Schema } from 'mongoose'

export interface IPaymentDocument extends IPayment, Document {}

const PaymentSchema = new Schema<IPaymentDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    currency: {
      type: String,
      default: 'VND' // hoặc USD nếu dùng cổng quốc tế
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'momo', 'zalopay', 'paypal', 'cash', 'bank_transfer'],
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'success', 'failed', 'cancelled', 'refunded'],
      default: 'pending'
    },
    transactionCode: {
      type: String, // ID từ cổng thanh toán (Momo, PayPal, ...), có thể null với "cash"
      default: null
    },
    paidAt: {
      type: Date
    },
    note: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const PaymentModel = model<IPaymentDocument>('Payment', PaymentSchema)
export default PaymentModel
