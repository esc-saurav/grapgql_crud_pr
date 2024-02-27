import { Injectable } from '@nestjs/common';

interface IUser {
    id: number;
    username: string;
    password: string;
    role: string;

}

@Injectable()
export class UserService {
    user: IUser[] = [
        { id: 1, username: 'jhon', password: '123', role: 'admin' },
        { id: 3, username: 'jane', password: '123', role: 'user' },
    ]
}
