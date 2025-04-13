import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  ];

  // Get - Retrieve all users by id
  getUser(id: number): User | { message: string } {
    return (
      this.users.find((user) => user.id === id) || { message: 'User not found' }
    );
  }

  // Post - Create a new user
  createUser(user: Omit<User, 'id'>): User {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  // Put - Update an existing user by id
  updateUser(id: number, user: Partial<User>): User | { message: string } {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return { message: 'User not found' };
    }
    this.users[index] = { ...this.users[index], ...user };
    return this.users[index];
  }

  // Delete - Remove a user by id
  deleteUser(id: number): User | { message: string } {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return { message: 'User not found' };
    }
    const deletedUser = this.users.splice(index, 1)[0];
    return deletedUser;
  }
}
