import { Expose, Transform } from 'class-transformer';
import { Model } from 'mongoose';

export class AddressSerializer {
  @Expose()
  @Transform(({ obj }) => obj._id.toString())
  id: string;

  @Expose()
  zipcode: string;

  @Expose()
  number: string;

  @Expose()
  country: string;

  @Expose()
  neighborhood?: string;

  @Expose()
  state?: string;

  @Expose()
  city?: string;

  @Expose()
  street?: string;

  constructor(partial: Partial<any>) {
    partial = partial.toObject({
      getters: true,
      virtuals: false,
      minimize: true,
    });

    console.log(partial);

    Object.assign(this, partial);
  }
}
