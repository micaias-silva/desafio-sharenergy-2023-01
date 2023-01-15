import {
  IsDefined,
  IsEmail,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Address } from 'src/schemas/address.schema';

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

  address: Address;
}
