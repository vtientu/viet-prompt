import { Types } from 'mongoose'

export interface IPrompt {
  owner: Types.ObjectId
  prompt: string
  category: Types.ObjectId
  thumbnail: Types.ObjectId
  tags: string[]
  description: string
  isFree: boolean
  isVerified: boolean
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}
