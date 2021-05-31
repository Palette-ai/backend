import app from '../src/server';
import request from 'supertest';

describe('GET /', () => {
    
    it('responds with 200', async () => {
        await request(app)
            .get('/')
            .expect(200); 
    });
});