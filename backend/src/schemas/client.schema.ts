import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as OGSchema } from 'mongoose';
import { Address } from './address.schema';
const paginate = require('mongoose-paginate-v2');

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ required: true, minlength: 2, maxlength: 255 })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop({ required: true })
  cpf: string;

  @Prop({ type: OGSchema.Types.ObjectId, ref: 'Address' })
  address: Address;
}

export const ClientSchema =
  SchemaFactory.createForClass(Client).plugin(paginate);
