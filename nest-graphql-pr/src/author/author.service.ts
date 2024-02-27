import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  author = [
    {
      id: 1,
      name: 'John Doe',
      posts: [
        {
          id: 1,
          title: 'NestJS is awesome!',
          votes: 10,
        },
        {
          id: 2,
          title: 'GraphQL is cool!',
          votes: 5,
        },
      ],
    },
    {
      id: 1,
      name: 'John Doe',
      posts: [
        {
          id: 1,
          title: 'NestJS is awesome!',
          votes: 10,
        },
        {
          id: 2,
          title: 'GraphQL is cool!',
          votes: 5,
        },
      ],
    },
    {
      id: 2,
      name: 'Jane Doe',
      posts: [
        {
          id: 3,
          title: 'NestJS is dope!',
          votes: 10,
        },
        {
          id: 4,
          title: 'GraphQL is dope!',
          votes: 5,
        },
      ],
    },
  ];

  findOneById(name: string) {
    const qs = this.author.filter((author) => author.name.includes(name));
    console.log(qs)
    return qs
  }
}