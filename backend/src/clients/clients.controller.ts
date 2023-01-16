import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
  Query,
} from '@nestjs/common';
import { Roles } from 'src/auth/shared/roles.decorator';
import { Role } from 'src/auth/shared/role.enum';
import { JwtAuthGuard } from 'src/auth/shared/auth-jwt.guard';
import { RolesGuard } from 'src/auth/shared/roles.guard';

import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PaginatedClientSerializer } from './serializers/paginated-client-serializer';
import { ClientSerializer } from './serializers/client.serializer';

@SerializeOptions({ excludeExtraneousValues: true })
@UseInterceptors(ClassSerializerInterceptor)
@Roles(Role.Admin)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() data: CreateClientDto) {
    const user = await this.clientsService.create(data);
    return new ClientSerializer(user);
  }

  @Get()
  async search(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('term') term?: string,
  ) {
    const usersPage = await this.clientsService.search(page, limit, term);
    return new PaginatedClientSerializer(usersPage);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const client = await this.clientsService.findOne(id);
    return new ClientSerializer(client);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return await this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.clientsService.remove(id);
  }
}
