
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id?: Nullable<number>;
    price?: Nullable<number>;
    title?: Nullable<string>;
}

export interface Author {
    id: number;
    name?: Nullable<string>;
    posts: Nullable<Post>[];
}

export interface Book {
    id: number;
    price: number;
    title: string;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    deleteBook(id: number): string | Promise<string>;
    updateBook(id: number, updateBookArgs: AddBookArgs): string | Promise<string>;
}

export interface Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
}

export interface IQuery {
    author(name: string): Author[] | Promise<Author[]>;
    book(id: number): Nullable<Book> | Promise<Nullable<Book>>;
    books(): Book[] | Promise<Book[]>;
    posts(): Post[] | Promise<Post[]>;
}

type Nullable<T> = T | null;
