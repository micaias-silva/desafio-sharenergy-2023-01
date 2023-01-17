import { Exclude, Expose } from 'class-transformer';

export class UserSerializer {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  firstName?: string;

  @Expose()
  lastName?: string;

  @Expose()
  profilePictureUrl?: string;

  @Expose()
  birthdate?: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<any>) {
    partial = partial.toObject({
      getters: true,
      virtuals: false,
      minimize: true,
    });

    partial._id = partial._id.toString();
    Object.assign(this, partial);
    this.id = partial._id;
  }
}
