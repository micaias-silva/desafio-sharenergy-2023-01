import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { CreateAddressDto } from './create-address.dto';

export class CreateClientDto {
  @IsDefined()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  name: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsString()
  @Matches(
    /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
  )
  cpf: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
