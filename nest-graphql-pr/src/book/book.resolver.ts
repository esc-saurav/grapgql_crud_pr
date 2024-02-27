import { Args, Int, Resolver, Mutation } from '@nestjs/graphql';
import { Book } from './models/book.model';
import { Query } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book as BookModel } from 'src/graphql';
import { AddBookArgs } from './args/addBook.args';

@Resolver(() => Book)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query(() => [Book], { name: 'books' })
  async getBooks(): Promise<BookModel[]> {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book', nullable: true })
  async getBookById(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<BookModel> {
    return this.bookService.findOneById(id);
  }

  @Mutation(() => String, { name: 'deleteBook' })
  async deleteBookById(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<string> {
    return this.bookService.deleteBook(id);
  }

  @Mutation(() => String, { name: 'addBook' })
  async addBook(
    @Args({ name: 'addBookArgs', type: () => AddBookArgs })
    addBookArgs: AddBookArgs,
  ): Promise<string> {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation(() => String, { name: 'updateBook' })
  async updateBook(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args({ name: 'updateBookArgs', type: () => AddBookArgs })
    addBookArgs: AddBookArgs,
  ): Promise<string> {
    return this.bookService.updateBook(id, addBookArgs);
  }
}
