import { Address } from 'src/schemas/address.schema';

export class CreateClientDto {
  name: string;
  email: string;
  phone_number: string;
  cpf: string;
  address: Address;
}
