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

  // ✅ Thêm virtual
  fullName?: string
}
