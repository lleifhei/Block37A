const request = require('supertest');
const express = require('express');
const authRoutes = require('../routes/auth');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

describe('Auth Routes', () => {
    describe('POST /auth/login', () => {
        it('should return 200 and a message for login', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ username: 'testuser', password: 'password123' });
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('Login route');
        });
    });

    describe('POST /auth/register', () => {
        it('should return 200 and a message for registration', async () => {
            const res = await request(app)
                .post('/auth/register')
                .send({ username: 'newuser', password: 'password123' });
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('Register route');
        });
    });

    describe('GET /auth/logout', () => {
        it('should return 200 and a message for logout', async () => {
            const res = await request(app).get('/auth/logout');
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('Logout route');
        });
    });
});