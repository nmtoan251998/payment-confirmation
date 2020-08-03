import { ICreateUserInput } from './Interfaces/createUser';
import User, { IUser } from './user.model';
import { BaseService } from '../shared/base.service';

export default class UserService extends BaseService<IUser> {
    constructor() {
        super();
        this._model = User;
    }

    async createUser({
        email,
        password,
        firstName,
        lastName,
    }) : Promise<ICreateUserInput> {
        try {
            const user = await User.create({
                email,
                password,
                firstName,
                lastName,
            });
        
            return user;
        } catch (error) {
            throw error;
        }
    }
}
