import { NotFoundError, UnauthorizedError } from '@/core/error.response.js'
import { OK } from '@/core/success.response.js'
import { CustomRequest } from '@/interfaces/request.interface.js'
import ProfileService from '@/services/profile.service.js'
import { Response } from 'express'

class UserController {
  public static async getProfile(req: CustomRequest, res: Response) {
    const userId = req.user._id.toString()

    if (!userId) {
      throw new UnauthorizedError('Unauthorized')
    }

    const profile = await ProfileService.getProfile(userId)

    if (!profile) {
      throw new NotFoundError('Profile not found')
    }

    new OK({
      message: 'Get profile successfully',
      metadata: profile
    }).send(res)
  }
}

export default UserController
