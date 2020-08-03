import { IUser } from '../user.model';

export interface ICreateUserInput {
    email: IUser['email'],
    password: IUser['password'],
    firstName ?: IUser['firstName'],
    lastName ?: IUser['lastName'],
}

export interface ICreateUserOutput {
    email: IUser['email'],
    firstName: IUser['firstName'],
    lastName: IUser['lastName'],
}
