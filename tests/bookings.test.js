const request = require('supertest');
const app = require('../app');

describe('Puntos finales de bookings', () => {
    it('Obtenemos todos los bookings', async () => {
      const res = await request(app)
        .get('/bookings')
      expect(res.statusCode).toEqual(200)
    }) 
  
    it('Obtenemos un booking', async () => {
      const res = await request(app)
        .get('/bookings/:id')
      expect(res.statusCode).toEqual(200)
    })
  
    it('Eliminamos un booking', async () => {
      const res = await request(app)
        .delete('/bookings/:id')
    })
    
    it('Actualizamos un booking', async () => {
      const res = await request(app)
        .put('/bookings/:id')
      expect(res.statusCode).toEqual(200)
    })
  
    it('Obtenemos todos los bookings', async () => {
      const res = await request(app)
        .post('/bookings')
      expect(res.statusCode).toEqual(200)
    }) 
  
})