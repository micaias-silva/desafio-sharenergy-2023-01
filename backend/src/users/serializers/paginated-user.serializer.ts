import { PartialType } from '@nestjs/mapped-types';
import { Expose, Type } from 'class-transformer';
import { PaginateResult } from 'mongoose';
import { PaginationSerializer } from 'src/generics/serializers/pagination.serializer';
import { UserDocument } from 'src/schemas/user.schema';
import { UserSerializer } from './user.serializer';

export class PaginatedUserSerializer extends PartialType(PaginationSerializer) {
  @Expose()
  @Type(() => UserSerializer)
  docs?: UserSerializer[];

  constructor(partial: Partial<PaginateResult<UserDocument>>) {
    super();
    Object.assign(this, partial);
    console.log(this);
  }
}
