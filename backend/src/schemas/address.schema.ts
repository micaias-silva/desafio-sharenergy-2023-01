import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AddressDocument = HydratedDocument<Address>;

@Schema()
export class Address {
  @Prop({ required: true })
  zipcode: number;

  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  country: string;

  @Prop()
  neighborhood: string;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  street: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
