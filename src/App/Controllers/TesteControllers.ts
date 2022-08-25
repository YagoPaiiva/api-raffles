import { Request, Response } from 'express'
import User, { UserType } from '../Models/User'

export default new class Teste {

  public async index(request: Request, response: Response) {

    let newUser = new User()
    newUser.name.firstName = 'Yago'
    newUser.name.lastName = 'Paiva'
    newUser.email = 'paiivayago@gmail.com'
    newUser.password = '123456'
    newUser.age = 27
    let result = await newUser.save()

    console.log('New User create', result)


    response.status(200).json({ pong: true })
  }
  public async updateUser(request: Request, response: Response) {
    response.status(200).json({ update: true })
  }
}
