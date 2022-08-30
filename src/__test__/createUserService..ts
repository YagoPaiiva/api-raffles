/* import request from 'supertest'
import App from '../App'
import * as database from '../App/Services/Mongodb'

describe("Create user", () => {
  it('Connect mongodb', async function () {
    await database.connection()
  })

  test('get update true', async function () {
    const res = await request(App).get('/')
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ update: true });
  })
})
 */
