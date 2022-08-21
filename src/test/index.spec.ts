import app from '../app';
import request from 'supertest';
import { ResponseGetApi } from '../interfaces/index';

describe('GET /api', () => {
    
    test('should respond with a 200 status code', async () => {
        const response = await  request(app).get('/api').send();
        expect(response.statusCode).toBe(200);
    });


    test('shoul respond with a objecti type ResponseGetApi', async () => {
        const response = await  request(app).get('/api').send();

        expect(response.body).toMatchObject({
            "titles": [
              "Locales en Venta Amadeus Calzada del Valle",
              "Locales Comerciales en Venta Vasconcelos San Pedro Garza Garcia",
              "Local en Renta Plaza Villas Valle San Pedro Garza Garcia",
              "Oficinas en Venta en Valle Oriente",
              "Oficinas en Renta en Torre Altha San Pedro Garza Garcia",
              "Oficina en Venta Centrito 360 San Pedro Garza Garcia",
              "Oficinas en Renta en Colonia del Valle San Pedro Garza Garcia",
              "Local en Venta Centrito 360 San Pedro Garza Garcia",
              "Local Comercial en Renta en Plaza Cen 333 San Pedro",
              "Local en Renta Plaza Maranta San Pedro Garza Garcia",
              "Local Renta Valle",
              "Oficina en Venta Centrito 360 San Pedro Garza Garcia",
              "Oficinas en Renta en Colonia del Valle San Pedro Garza Garcia",
              "Locales en Venta Edificio Roble en San Pedro Garza Garcia",
              "Locales en Venta Amadeus Calzada del Valle",
              "Oficinas en Venta Plaza Kw Residencial San Agustin en San Pedro",
              "Locales Comerciales en Venta Vasconcelos San Pedro Garza Garcia",
              "Oficinas en Renta en Torre Altha San Pedro Garza Garcia",
              "Local Comercial en Venta Plaza Kw Residencial San Agustin en San Pedro",
              "Local Comercial en Renta en Plaza Cen 333 San Pedro"
            ],
            "total": 20,
          })
    });
})