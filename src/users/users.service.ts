import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return await this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find({});
  }

  async createUser(email: string, age: number): Promise<User> {
    return await this.usersRepository.create({
      userId: uuidv4(),
      email,
      age,
      favoriteFoods: [],
    });
  }

  async updateUser(userId: string, userUpdate: UpdateUserDto): Promise<User> {
    return await this.usersRepository.update({ userId }, userUpdate);
  }
}