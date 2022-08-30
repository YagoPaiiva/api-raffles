import supertest from "supertest"
import App from "../App"
import * as database from '../App/Services/Mongodb'

beforeAll(async () => {
  global.testRequest = supertest(App)
})

afterAll(async () => {
  await database.close()
})
