import { HEADER } from '@/constants/app.constants.js'
import { OK } from '@/core/success.response.js'
import { CustomRequest } from '@/interfaces/request.interface.js'
import AuthService from '@/services/auth.service.js'
import { NextFunction, Request, Response } from 'express'

class AuthController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    new OK({
      message: 'Login successfully!',
      metadata: await AuthService.login(req.body)
    }).send(res)
  }

  public static async register(req: Request, res: Response, next: NextFunction) {
    new OK({
      message: 'Register successfully!',
      metadata: await AuthService.register(req.body)
    }).send(res)
  }

  public static async forgotPassword(req: Request, res: Response, next: NextFunction) {
    new OK({
      message: 'Forgot password successfully!',
      metadata: await AuthService.forgotPassword(req.body)
    }).send(res)
  }

  public static async logout(req: CustomRequest, res: Response, next: NextFunction) {
    new OK({
      message: 'Logout successfully!',
      metadata: await AuthService.logout(req.keyToken)
    }).send(res)
  }

  public static async refreshToken(req: CustomRequest, res: Response, next: NextFunction) {
    new OK({
      message: 'Refresh token successfully!',
      metadata: await AuthService.refreshToken({
        refreshToken: req.body.refreshToken,
        keyToken: req.keyToken
      })
    }).send(res)
  }
}

export default AuthController
