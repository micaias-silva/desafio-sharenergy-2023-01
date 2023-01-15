import { PartialType } from '@nestjs/mapped-types';
import { Expose, Type } from 'class-transformer';
import { PaginateResult } from 'mongoose';
import { PaginationSerializer } from 'src/generics/serializers/pagination.serializer';
import { ClientDocument } from 'src/schemas/client.schema';
import { ClientSerializer } from './client.serializer';

export class PaginatedClientSerializer extends PartialType(
  PaginationSerializer,
) {
  @Expose()
  @Type(() => ClientSerializer)
  docs?: ClientSerializer[];

  constructor(partial: Partial<PaginateResult<ClientDocument>>) {
    super();
    Object.assign(this, partial);
  }
}
