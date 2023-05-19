import { UserSchema } from './user.schema';
import { Document, Model, model } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
}

export const UserModel: Model<User> = model<User>('User', UserSchema);
