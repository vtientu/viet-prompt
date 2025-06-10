import { NotFoundError } from '@/core/error.response.js'
import PromptModel from '@/models/prompt.model.js'
import UserModel from '@/models/user.model.js'

class PromptService {
  public static async getFavourite(userId: string) {
    const user = await UserModel.findById(userId)
    if (!user) {
      throw new NotFoundError('User not found')
    }

    const prompts = await PromptModel.find({ _id: { $in: user.favorites } })

    return prompts
  }
}

export default PromptService
