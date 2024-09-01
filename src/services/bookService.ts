import { Book } from "../models/book";

export const addBook = async (isbn: string, title: string, author: string, publicationYear: number) => {
  const book = new Book({ isbn, title, author, publicationYear });
  await book.save();
  return book;
};

export const borrowBook = async (isbn: string) => {
  const book = await Book.findOne({ isbn });

  if (!book) {
    throw new Error('Book not found.');
  }

  if (!book.isAvailable) {
    throw new Error('Book is already borrowed.');
  }

  book.isAvailable = false;
  await book.save();
  return book;
};

export const returnBook = async (isbn: string) => {
  const book = await Book.findOne({ isbn });

  if (!book) {
    throw new Error('Book not found.');
  }

  if (book.isAvailable) {
    throw new Error('Book is not borrowed.');
  }

  book.isAvailable = true;
  await book.save();
  return book;
};

export const getAvailableBooks = async () => {
  return await Book.find({ isAvailable: true });
};
