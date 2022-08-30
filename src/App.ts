import express from 'express'
import cors from 'cors'
import routes from './Routes'
import * as database from './App/Services/Mongodb'

class SetupServer {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  public middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(express.urlencoded({ extended: true }))
  }

  public routes() {
    this.express.use(routes)
  }

}

export default new SetupServer().express
