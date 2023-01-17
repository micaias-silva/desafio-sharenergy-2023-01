import { Transform } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsDefined,
  IsEmail,
  IsLowercase,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsDefined()
  @MinLength(3)
  @MaxLength(20)
  @IsLowercase()
  @Matches(/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
  username: string;

  @IsString()
  @IsDefined()
  @MinLength(6)
  @MaxLength(64)
  password: string;

  @IsString()
  @IsDefined()
  @IsEmail()
  email: string;

  @IsOptional()
  @MinLength(4)
  @MaxLength(32)
  firstName?: string;

  @IsOptional()
  @MinLength(4)
  @MaxLength(32)
  lastName?: string;

  @IsOptional()
  @IsUrl()
  profilePictureUrl?: string;

  @IsOptional()
  @IsDateString({})
  birthdate?: Date;
}
