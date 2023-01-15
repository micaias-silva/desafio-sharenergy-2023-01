import { IsDefined, IsOptional, IsString, Matches } from 'class-validator';

export class CreateAddressDto {
  @IsDefined()
  @IsString()
  @Matches(/^[0-9]{5}-[0-9]{3}$/)
  zipcode: string;

  @IsString()
  @IsDefined()
  number: string;

  @IsString()
  @IsDefined()
  country: string;

  @IsOptional()
  @IsString()
  neighborhood?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  street?: string;
}
