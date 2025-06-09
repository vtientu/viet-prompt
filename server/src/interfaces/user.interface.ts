import { Types } from 'mongoose'

export interface IUser {
  email: string
  firstName: string
  lastName: string
  password: string
  avatar?: string
  role: 'admin' | 'user'
  isActive: boolean
  isVerified: boolean
  createdAt?: Date
  updatedAt?: Date
  favorites: Types.ObjectId[]
  forgot: {
    newPassword: string
    code: string
  }

  // ✅ Thêm virtual
  fullName?: string
}
