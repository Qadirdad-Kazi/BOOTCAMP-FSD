import { Controller, Get, Post, Param, Body, UseGuards, UseInterceptors, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggingInterceptor } from 'src/Interceptor/loginInterceptor';
import { AuthGuard } from 'src/Guard/auth.guard'; // or 'src/Guard/auth/auth.guard' if not moved

@Controller('user')
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @UseGuards(AuthGuard)
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() newUser: { name: string; email: string }) {
    return this.userService.createUser(newUser);
  }
}
