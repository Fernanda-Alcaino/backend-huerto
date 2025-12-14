import { IsNumber, IsArray, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsNumber()
  total: number;

  @IsArray()
  items: any[];

  @IsString()
  userEmail: string;
}
