import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as OGSchema } from 'mongoose';
import { Address } from './address.schema';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone_number: string;

  @Prop({ required: true })
  cpf: string;

  @Prop({ type: OGSchema.Types.ObjectId, ref: 'Address' })
  address: Address;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
