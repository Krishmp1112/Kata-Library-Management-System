import { Request, Response } from 'express';
import Book from '../models/book';

// Handler to add a new book
export const addBookHandler = async (req: Request, res: Response) => {
    try {
        const { isbn, title, author, publicationYear } = req.body;
        const newBook = new Book({ isbn, title, author, publicationYear, available: true });
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Error adding book', error: (error as Error).message });
    }
};

// Handler to borrow a book
export const borrowBookHandler = async (req: Request, res: Response) => {
    try {
        const { isbn, userId } = req.body;
        const book = await Book.findOne({ isbn });

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (!book.available) {
            return res.status(400).json({ message: 'Book is already borrowed' });
        }

        book.available = false;
        book.borrowedBy = userId;
        await book.save();
        res.status(200).json({ message: 'Book borrowed successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Error borrowing book', error: (error as Error).message });
    }
};

// Handler to return a book
export const returnBookHandler = async (req: Request, res: Response) => {
    try {
        const { isbn } = req.body;
        const book = await Book.findOne({ isbn });

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.available = true;
        book.borrowedBy = null; // Ensure borrowedBy can accept null in the Book model
        await book.save();
        res.status(200).json({ message: 'Book returned successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Error returning book', error: (error as Error).message });
    }
};

// Handler to get available books
export const getAvailableBooksHandler = async (req: Request, res: Response) => {
    try {
        const books = await Book.find({ available: true });
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving available books', error: (error as Error).message });
    }
};