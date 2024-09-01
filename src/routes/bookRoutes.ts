import express from 'express';
import { addBookHandler, borrowBookHandler, returnBookHandler, getAvailableBooksHandler } from '../controllers/bookController';

const router = express.Router();

// Route to add a new book
router.post('/books/add', addBookHandler);

// Route to borrow a book
router.put('/books/borrow', borrowBookHandler);

// Route to return a book
router.put('/books/return', returnBookHandler);

// Route to get all available books
router.get('/books', getAvailableBooksHandler);

export default router;
