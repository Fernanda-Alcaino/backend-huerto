import { IsString, IsNumber, IsPositive, MinLength } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 letras' })
    name: string;

    @IsNumber()
    @IsPositive({ message: 'El precio debe ser positivo' })
    price: number;

    // La imagen es opcional al crear, la subiremos aparte o pondremos un string
    @IsString()
    image: string;
}