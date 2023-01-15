import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';
import { UsersService } from './shared/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/shared/auth-jwt.guard';
import { UserAuthGuard } from 'src/auth/shared/auth-user.guard';
import { RolesGuard } from 'src/auth/shared/roles.guard';
import { Roles } from 'src/auth/shared/roles.decorator';
import { Role } from 'src/auth/shared/role.enum';
import { UserSerializer } from './serializers/user.serializer';
import { PaginatedUserSerializer } from './serializers/paginated-user.serializer';

@SerializeOptions({ excludeExtraneousValues: true })
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserSerializer> {
    const createdUser = await this.usersService.create(createUserDto);
    return new UserSerializer(createdUser!);
  }

  @Post('populate')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async populateWithRandomUsers(@Query() query: any) {
    await this.usersService.generateRandomUsers(Number(query.results));
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    const usersPage = await this.usersService.findAll(page, limit);
    return new PaginatedUserSerializer(usersPage);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    return new UserSerializer(user!);
  }

  @UseGuards(JwtAuthGuard, UserAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, UserAuthGuard)
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
