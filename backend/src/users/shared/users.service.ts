import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose, { PaginateModel, PaginateResult } from 'mongoose';
import { defaultPaginationOptions } from 'src/config/pagination.config';
import { User, UserDocument } from 'src/schemas/user.schema';
import { randomUsersApi } from 'src/services/randomUserApi';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: PaginateModel<UserDocument>,
  ) {}

  async create(createUserDTO: CreateUserDto) {
    return await this.userModel.create(createUserDTO);
  }

  async findAll(
    page = 1,
    limit = defaultPaginationOptions.limit,
  ): Promise<PaginateResult<UserDocument>> {
    return await this.userModel.paginate({}, { page, limit: limit });
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async findOneByUsername(username: string) {
    return await this.userModel.findOne({ username });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    return await user.update({ ...updateUserDto }); 
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await user.remove();
  }

  async generateRandomUsers(count?: number) {
    const generatedUsers: any[] = await (
      await randomUsersApi.get(`?results=${count || 50}`)
    ).data.results;

    const userPromisseList = generatedUsers.map((user) => {
      return this.userModel.create({
        username: user.login.username,
        password: user.login.password,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        profilePictureUrl: user.picture.large,
        birthdate: user.dob.date,
      });
    });

    await Promise.all(userPromisseList);
  }
}
