import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from 'src/schemas/client.schema';
import { Address, AddressDocument } from 'src/schemas/address.schema';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
  ) {}

  async create(data: CreateClientDto) {
    const address = await this.addressModel.create(data.address);
    const client = await this.clientModel.create({ ...data, address });
    return client;
  }

  async findAll() {
    return await this.clientModel.find();
  }

  async findOne(id: string) {
    return await this.clientModel.findOne({ _id: id }).populate('address');
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    await this.clientModel.updateOne({ _id: id }, { ...updateClientDto });
  }

  async remove(id: string) {
    await this.clientModel.remove({ _id: id });
  }
}
