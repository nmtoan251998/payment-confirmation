import { ISigninInput } from './Interfaces/signin';
import User, { IUser } from '../User/user.model';
import { BaseService } from '../shared/base.service';

export default class AuthService extends BaseService<IUser> {
    constructor() {
        super();
        this._model = User;
    }

    async signin({
        email,
        password,
    } : ISigninInput) : Promise<ISigninInput> {
        try {
            const user = await User.create({
                email,
                password,
            });
        
            return user;
        } catch (error) {
            throw error;
        }
    }
}
