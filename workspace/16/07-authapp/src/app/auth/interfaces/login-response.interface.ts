import { User } from './user.interface';

export interface LoginResponse {
    user:  User;
    token: string;
}

