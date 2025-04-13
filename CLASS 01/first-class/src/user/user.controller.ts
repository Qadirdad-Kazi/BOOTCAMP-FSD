import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUser(Number(id));
  }

  @Post()
  createUser(@Body() newUser: { name: string; email: string }) {
    return this.userService.createUser(newUser);
  }
}
