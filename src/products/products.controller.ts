import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products') // Ruta base: /products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post() // CREAR
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get() // LEER TODOS
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id') // LEER UNO
  findOne(@Param('id', ParseIntPipe) id: number) {
    // ParseIntPipe convierte el "1" del url a número 1 automáticamente
    return this.productsService.findOne(id);
  }

  @Patch(':id') // ACTUALIZAR (UPDATE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id') // BORRAR
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
