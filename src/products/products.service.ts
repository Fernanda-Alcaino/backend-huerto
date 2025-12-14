import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    // Retorna el producto creado
    return this.productRepository.save(createProductDto);
  }

  findAll() {
    // Retorna todos los productos
    return this.productRepository.find();
  }

  // 👈 Esta función es vital para findOne() en el controlador
  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    // Retorna el resultado de la operación (ej: {affected: 1})
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    // Retorna el resultado de la operación (ej: {affected: 1})
    return this.productRepository.delete(id);
  }
}