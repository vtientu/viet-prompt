import UserModel from '@/models/user.model.js'
import { UpdateProfileSchema } from '@/schema/user.schema.js'

class UserService {
  public static async getUser(userId: string) {
    const user = await UserModel.findById(userId).select('-password').lean({
      virtuals: true
    })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }
  public static async updateProfile(userId: string, data: UpdateProfileSchema) {
    const user = await UserModel.findByIdAndUpdate(userId, data, { new: true })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }
}

export default UserService
