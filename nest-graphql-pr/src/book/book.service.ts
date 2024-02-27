import { Injectable } from '@nestjs/common';
import { Book as BookModel } from 'src/graphql';

@Injectable()
export class BookService {
  books: BookModel[] = [
    { id: 1, title: 'The Great Gatsby', price: 10 },
    { id: 2, title: 'The Catcher in the Rye', price: 15 },
    { id: 3, title: 'To Kill a Mockingbird', price: 20 },
  ];

  findAll() {
    return this.books;
  }

  addBook(book: BookModel): string {
    this.books.push(book);
    return 'Book added successfully!';
  }

  updateBook(id: number, updatePayload: BookModel): string {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    this.books[bookIndex] = { ...this.books[bookIndex], ...updatePayload };

    return 'Book updated successfully!';
  }

  deleteBook(id: number): string {
    this.books = this.books.filter((book) => book.id !== id);
    return 'Book deleted successfully!';
  }

  findOneById(id: number) {
    return this.books.find((book) => book.id === id);
  }
}
