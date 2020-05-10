import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './helpers/create-user.dto';
import { UsersService } from './users.service';
import { User } from './helpers/user.interface';
import { UpdateUserDto } from './helpers/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public getAll(): Promise<Array<User>> {
    return this.usersService.getAll();
  }

  @Post()
  public create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Patch(':userId')
  public update(
    @Param('userId') userId: string,
    @Body() user: UpdateUserDto
  ): Promise<void> {
    return this.usersService.update(userId, user);
  }

  @Delete(':userId')
  public remove(@Param('userId') userId: string): Promise<void> {
    return this.usersService.remove(userId);
  }
}
