import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
}, { collection: 'users' });
