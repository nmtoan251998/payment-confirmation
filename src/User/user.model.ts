import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema : Schema = new Schema({
    email: {
        type: String,
        required: true,
        uniqe: true,
        trim: true,
        lowercase: true,
        max: 20,
        min: 1,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    },{ timestamps: true },
);

export interface IUser extends Document {
    email: string;
    password: string;
    firstName ?: string;
    lastName ?: string;
}

async function hashPassword(password : string, salt : number = 10) : Promise<string> {
    return await bcrypt.hash(password, salt);
}

UserSchema.virtual('fullName').get(function() {
    return this.firstName + this.lastName;
})

UserSchema.pre<IUser>('save', async function(next) {
    const user = this;

    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;

    next();
});

export default mongoose.model<IUser>('User', UserSchema, 'users');
