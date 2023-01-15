import { Model, PaginateModel } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from 'src/schemas/client.schema';
import { Address, AddressDocument } from 'src/schemas/address.schema';
import { defaultPaginationOptions } from 'src/config/pagination.config';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: PaginateModel<ClientDocument>,
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
  ) {}

  async create(data: CreateClientDto) {
    const address = await this.addressModel.create(data.address);
    const client = await this.clientModel.create({ ...data, address });
    return client;
  }

  async findAll(page = 1, limit = defaultPaginationOptions.limit) {
    return await this.clientModel.paginate(
      {},
      { page, limit, populate: 'address' },
    );
  }

  async findOne(id: string) {
    const client = await this.clientModel
      .findOne({ _id: id })
      .populate('address');

    if (!client) {
      throw new NotFoundException();
    }

    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.findOne(id);

    return await client.update({ ...updateClientDto });
  }

  async remove(id: string) {
    const client = await this.findOne(id);
    await client.remove();
  }
}
