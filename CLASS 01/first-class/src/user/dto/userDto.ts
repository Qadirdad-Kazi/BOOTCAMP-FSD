import { IsString, IsEmail, IsInt, Min, Max } from 'class-validator';

export class UserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Min(18)
    @Max(120)
    age: number;
  }