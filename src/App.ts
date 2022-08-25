import express from 'express'
import cors from 'cors'
import routes from './Routes'
import * as database from './App/Services/Mongodb'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
    this.databaseSetup()
  }

  public async databaseSetup(): Promise<void> {
    await database.connection()
  }

  public middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(express.urlencoded({ extended: true }))
  }

  public routes() {
    this.express.use(routes)
  }
  public async close(): Promise<void> {
    await database.close()
  }
}

export default new App().express
