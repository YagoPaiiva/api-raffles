import { Model } from 'mongoose'
import User, { UserType } from '../../App/Models/User'
import * as database from '../../App/Services/Mongodb'

describe("Create connection with MONGODB", () => {
  beforeAll(async function () {
    await database.connection()
  })
  const userTest: Model<UserType> = User

  it('Get one user of the database', async function () {
    const result = await userTest.find({})
    expect(result[0].name).toEqual({ firstName: 'Yago', lastName: 'Paiva' })
  })

  afterAll(async function () {
    await database.close()
  })
})
