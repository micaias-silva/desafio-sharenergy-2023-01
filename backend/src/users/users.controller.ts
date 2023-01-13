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
} from '@nestjs/common';
import { UsersService } from './shared/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/shared/auth-jwt.guard';
import { UserAuthGuard } from 'src/auth/shared/auth-user.guard';
import { RolesGuard } from 'src/auth/shared/roles.guard';
import { Roles } from 'src/auth/shared/roles.decorator';
import { Role } from 'src/auth/shared/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('populate')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async populateWithRandomUsers(@Query() query: any) {
    await this.usersService.generateRandomUsers(Number(query.results));
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
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
