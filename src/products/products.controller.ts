import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // 👈 Asegúrate de que todos estos estén importados
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

// 🚨 Usamos 'products' para que coincida con tu Frontend
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(+id);
    if (!product) {
      // 👈 Agregamos un control simple para si no encuentra el producto
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
    return product;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // 👈 La función update debe devolver algo que NestJS pueda procesar
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // 👈 La función remove debe devolver algo que NestJS pueda procesar
    return this.productsService.remove(+id);
  }
}