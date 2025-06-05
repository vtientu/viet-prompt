import { IUser } from '@/interfaces/user.interface.js'
import { Schema, Document, model, Model } from 'mongoose'

export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Password must be at least 8 characters long']
    },
    avatar: {
      type: String
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

UserSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', UserSchema)
export default UserModel
