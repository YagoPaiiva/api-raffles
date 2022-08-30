import { Model } from 'mongoose'
import User, { UserType } from '../../App/Models/User'

describe("Create connection with MONGODB", () => {
  const userTest: Model<UserType> = User

  it('Get one user of the database', async function () {
    const result = await userTest.find({})
    expect(result[0].name).toEqual({ firstName: 'Yago', lastName: 'Paiva' })
  })

})
