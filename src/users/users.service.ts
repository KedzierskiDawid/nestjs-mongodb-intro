import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './helpers/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './helpers/user.interface';
import { UpdateUserDto } from './helpers/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  public async getAll(): Promise<Array<User>> {
    let users: Array<User>;

    try {
      users = await this.userModel.find({});
    } catch (error) {
      throw error;
    }

    return users;
  }

  public create(user: CreateUserDto): Promise<User> {
    return this.userModel.create(user);
  }

  public async update(userId: string, user: UpdateUserDto): Promise<void> {
    let _id: Types.ObjectId;

    try {
      _id = Types.ObjectId(userId);
      this.userModel.updateOne({ _id }, user);
    } catch (error) {
      throw error;
    }

    return;
  }

  public async remove(userId: string): Promise<void> {
    let _id: Types.ObjectId;

    try {
      _id = Types.ObjectId(userId);
      this.userModel.deleteOne({ _id });
    } catch (error) {
      throw error;
    }

    return;
  }
}
