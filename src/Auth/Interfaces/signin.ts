import { IUser } from '../../User/user.model';

export interface ISigninInput {
    email: IUser['email'],
    password: IUser['password'],
}
