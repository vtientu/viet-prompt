import UserModel from '@/models/user.model.js'

class ProfileService {
  public static async getProfile(userId: string) {
    const user = await UserModel.findById(userId).select('-password').lean({
      virtuals: true
    })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }
}

export default ProfileService
