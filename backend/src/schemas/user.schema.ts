import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hash } from 'bcrypt';
import { Role } from 'src/auth/shared/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true, minlength: 3, maxlength: 20 })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ minlength: 2, maxlength: 32 })
  firstName?: string;

  @Prop({ minlength: 2, maxlength: 32 })
  lastName?: string;

  @Prop()
  profilePictureUrl?: string;

  @Prop()
  birthdate?: Date;

  @Prop({ default: Role.User })
  readonly roles: Role[];
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
  const user = this as User;
  user.password = await hash(user.password, 10);
  next();
});

export { UserSchema };
