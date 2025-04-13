import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}
// The UserModule class is a NestJS module that encapsulates the user-related functionality of the application.
// It imports the UserController and UserService classes, which handle HTTP requests and user data operations, respectively.
