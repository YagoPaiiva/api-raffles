import { connection, model, Schema } from 'mongoose'

import argon2 from 'argon2'

export type UserType = {
  email: string,
  age: number,
  password: string,
  name: {
    firstName: string,
    lastName: string
  }
}
const schema = new Schema<UserType>({
  email: { type: String, required: true, unique: true, sparse: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: String
  }
})

schema.pre('save', async function () {
  this.password = await argon2.hash(this.password)
})

const modelName: string = 'User'

export default (connection && connection.models[modelName])
  ? connection.models[modelName]
  : model<UserType>(modelName, schema)
