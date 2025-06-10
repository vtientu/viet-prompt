import { BadRequestError, NotFoundError, UnauthorizedError } from '@/core/error.response.js'
import { OK } from '@/core/success.response.js'
import { CustomRequest } from '@/interfaces/request.interface.js'
import { updateProfileSchema } from '@/schema/user.schema.js'
import UserService from '@/services/user.service.js'
import { Response } from 'express'

class UserController {
  public static async getProfile(req: CustomRequest, res: Response) {
    const userId = req.user._id.toString()

    if (!userId) {
      throw new UnauthorizedError('Unauthorized')
    }

    const profile = await UserService.getUser(userId)

    if (!profile) {
      throw new NotFoundError('Profile not found')
    }

    new OK({
      message: 'Get profile successfully',
      metadata: profile
    }).send(res)
  }
  public static async updateProfile(req: CustomRequest, res: Response) {
    const userId = req.user._id.toString()
    const { firstName, lastName, gender, country, language } = req.body
    const { error } = updateProfileSchema.safeParse({
      firstName,
      lastName,
      gender,
      country,
      language
    })
    if (error) {
      throw new BadRequestError(error.errors.map((err) => err.message).join(', '))
    }
    const profile = await UserService.updateProfile(userId, {
      firstName,
      lastName,
      gender,
      country,
      language
    })
    new OK({
      message: 'Update profile successfully',
      metadata: profile
    }).send(res)
  }
}

export default UserController
