
describe('Test Home Page', function () {
  it('Home page update', async function () {
    const result = await testRequest.get('/')
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({ update: true });
  })
})
