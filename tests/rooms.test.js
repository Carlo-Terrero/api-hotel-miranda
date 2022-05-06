const request = require('supertest');
const app = require('../app');

describe('Puntos finales de rooms', () => {
    it('Obtenemos todos los rooms', async () => {
      const res = await request(app)
        .get('/rooms')
      expect(res.statusCode).toEqual(200)
    }) 
  
    it('Obtenemos un rooms', async () => {
      const res = await request(app)
        .get('/rooms/:id')
      expect(res.statusCode).toEqual(200)
    })
  
    it('Eliminamos un rooms', async () => {
      const res = await request(app)
        .delete('/rooms/:id')
    })
    
    it('Actualizamos un rooms', async () => {
      const res = await request(app)
        .put('/rooms/:id')
      expect(res.statusCode).toEqual(200)
    })
  
    it('Obtenemos todos los rooms', async () => {
      const res = await request(app)
        .post('/rooms')
      expect(res.statusCode).toEqual(200)
    }) 
  
})