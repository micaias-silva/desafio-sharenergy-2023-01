import { Exclude, Expose } from 'class-transformer';

export class CreateUserDto {
  username: string;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string;
  birthdate?: Date;
}
