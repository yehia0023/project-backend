import { Controller, Get, Req, Res, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(@Req() req, @Res() res): Promise<User[]> {
    const users = await this.userService.getAllUsers();
    return res.status(200).json(users.map(user => ({ id: user.id, name: user.name, email: user.email })));
  }
}
