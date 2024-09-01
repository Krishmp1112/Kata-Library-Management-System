import request from 'supertest';
import express from 'express';
import bookRoutes from '../routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/api', bookRoutes);

describe('Book Routes', () => {
  it('should add a new book', async () => {
    const res = await request(app).post('/api/books').send({
      isbn: '1234567890',
      title: 'Test Book',
      author: 'John Doe',
      publicationYear: 2022
    });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test Book');
  });

  // More tests can be added for borrow, return, and get books
});
