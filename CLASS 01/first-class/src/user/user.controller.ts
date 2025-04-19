import { Controller, Get, Post, Param, Body, UseGuards, ParseIntPipe, UseInterceptors, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/userDto';
import { LoggingInterceptor } from 'src/Interceptor/loginInterceptor';
import { PlainLiteralObject } from '@nestjs/common';
import { UserResponseDto } from './dto/userDtoResponse';
import { AuthGuard } from 'src/Guard/auth.guard';



@Controller('user')
@UseInterceptors(LoggingInterceptor)
@UsePipes(ParseIntPipe)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @UseGuards(AuthGuard)
  getUser(@Param('id') id: ParseIntPipe) {
    return this.userService.getUser(Number(id));
  }

}
