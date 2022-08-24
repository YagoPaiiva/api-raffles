import { Request, Response } from 'express'

export default new class Teste {

  public async index(request: Request, response: Response) {
    response.status(200).json({ pong: true })
  }
}
