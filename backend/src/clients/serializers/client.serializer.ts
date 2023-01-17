import { Expose, Transform, Type } from 'class-transformer';
import { PaginateResult } from 'mongoose';
import { ClientDocument } from 'src/schemas/client.schema';
import { AddressSerializer } from './address.serializer';

export class ClientSerializer {
  @Expose()
  @Transform(({ obj }) => obj._id.toString())
  id: string;
  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  cpf: string;

  @Expose()
  @Type(() => AddressSerializer)
  address: AddressSerializer;

  constructor(partial: Partial<any>) {
    partial = partial.toObject({
      getters: true,
      virtuals: false,
      minimize: true,
    });

    Object.assign(this, partial);
  }
}
