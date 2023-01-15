import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { PaginateModel, PaginateResult } from 'mongoose';
import { defaultPaginationOptions } from 'src/config/pagination.config';
import { User, UserDocument } from 'src/schemas/user.schema';
import { randomUsersApi } from 'src/services/api';
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
    return await this.userModel.findOne({ _id: id });
  }

  async findOneByUsername(username: string) {
    return await this.userModel.findOne({ username });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.updateOne({ _id: id }, { ...updateUserDto });
  }

  async remove(id: string) {
    await this.userModel.remove({ _id: id });
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
