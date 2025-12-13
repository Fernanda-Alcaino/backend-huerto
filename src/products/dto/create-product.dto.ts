import { IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'El nombre debe ser texto' })
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({}, { message: 'El precio debe ser un número' })
  @IsPositive({ message: 'El precio debe ser mayor a 0' })
  price: number;

  @IsNumber()
  stock: number;
}
