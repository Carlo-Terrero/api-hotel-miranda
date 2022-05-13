const request = require('supertest')
//En este otro punto, ejemplo solo llegaba has router y luego cogia el resto (que era 1). Pero no espesificaba.
//const app = require('../server/user') //rutas de user
const app = require('../app') //rutas de user

describe('probamos puntos finales de User', () => {

  it('recogemos 1 user', async () => {
    const res = await request(app)
      .get('/users/:id')//aqui la ruta de lo que vamos hacer
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toHaveProperty('post')
  })

  it('recogemos todos los user', async () => {
    const res = await request(app)
      .get('/users/')
    expect(res.statusCode).toEqual(200)
  })

  it('agregamos un user', async () => {
    const res = await request(app)
      .post('/users/')
    expect(res.statusCode).toEqual(200)
  })

  it('actualicemos un user', async () => {
    const res = await request(app)
      .put('/users/:id')
    expect(res.statusCode).toEqual(200)
  })

  it('eliminamos un user', async () => {
    const res = await request(app)
      .delete('/users/:id')
    expect(res.statusCode).toEqual(200)
  })
})