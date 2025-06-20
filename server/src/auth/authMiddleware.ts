import { getTokenFromHeader } from '@/auth/authUtils.js'
import { HEADER } from '@/constants/app.constants.js'
import { ForbiddenError, UnauthorizedError } from '@/core/error.response.js'
import asyncHandler from '@/helpers/asyncHandler.js'
import { CustomRequest } from '@/interfaces/request.interface.js'
import KeyTokenModel from '@/models/keyToken.model.js'
import { NextFunction, Response } from 'express'
import JWT from 'jsonwebtoken'
import { isValidObjectId } from 'mongoose'

export const apiKey = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const key = req.headers[HEADER.API_KEY]?.toString()

  if (!key) {
    throw new ForbiddenError()
  }

  // const objectKey = await ApiKeyRepository.findKeyActiveByKey(key)

  // if (!objectKey) {
  //   throw new ForbiddenError()
  // }

  // req.objectKey = objectKey

  next()
}

export const permission = (permission: string) => async (req: CustomRequest, res: Response, next: NextFunction) => {
  // if (!req.objectKey?.permissions) {
  //   throw new ForbiddenError()
  // }

  // const isValidPermission = req.objectKey.permissions.includes(permission)

  // if (!isValidPermission) {
  //   throw new ForbiddenError()
  // }

  next()
}

export const authentication = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
  const userId = req.headers[HEADER.CLIENT_ID]?.toString()

  if (!userId || !isValidObjectId(userId)) {
    throw new UnauthorizedError()
  }

  const keyToken = await KeyTokenModel.findOne({ user: userId })

  if (!keyToken) {
    throw new UnauthorizedError()
  }

  const refreshToken = req.headers[HEADER.REFRESH_TOKEN]?.toString()
  if (refreshToken) {
    try {
      const decodeUser = JWT.verify(refreshToken, keyToken.refreshTokenKey) as JWT.JwtPayload
      req.user = decodeUser
      return next()
    } catch (error) {
      throw error
    }
  }

  const authHeader = req.headers.authorization

  const accessToken = getTokenFromHeader(authHeader)
  if (!accessToken) {
    throw new UnauthorizedError()
  }

  try {
    const decodeUser = JWT.verify(accessToken, keyToken.accessTokenKey) as JWT.JwtPayload
    if (userId !== decodeUser?._id) throw new UnauthorizedError('Invalid UserID')
    req.user = decodeUser
    req.keyToken = keyToken
    next()
  } catch (error) {
    throw error
  }
})

export const isAdmin = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.user.role !== 'admin') {
    throw new ForbiddenError('Require admin role')
  }
  return next()
}
