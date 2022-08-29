import { Request, Response } from 'express'
import User, { UserType } from '../Models/User'

export default new class Teste {

  public async index(request: Request, response: Response) {
    const { name, email, password, age }: UserType = request.body()
    let newUser = new User()

    newUser.name = { firstName: name.firstName, lastName: name.lastName }
    newUser.email = email
    newUser.password = password
    newUser.age = age

    const result = await newUser.save()
    console.log(result)

    response.status(200).json({ pong: true })
  }
  public async updateUser(request: Request, response: Response) {
    response.status(200).json({ update: true })
  }
}
