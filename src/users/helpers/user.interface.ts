import { Document } from 'mongoose';

export interface User extends Document {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}
