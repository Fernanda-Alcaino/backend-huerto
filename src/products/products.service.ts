import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity'; // Asegúrate de tener tu Entidad creada

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // POST: Crear
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  // GET: Traer todos
  async findAll() {
    return await this.productRepository.find();
  }

  // GET: Traer uno por ID
  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`); // Retorna 404
    }
    return product;
  }

  // PATCH: Actualizar
  async update(id: number, updateProductDto: UpdateProductDto) {
    // Primero verificamos que exista
    const product = await this.findOne(id);
    // Fusionamos los cambios
    this.productRepository.merge(product, updateProductDto);
    return await this.productRepository.save(product);
  }

  // DELETE: Borrar
  async remove(id: number) {
    const product = await this.findOne(id); // Reusamos findOne para validar 404
    await this.productRepository.remove(product);
    return { message: `Producto #${id} eliminado correctamente` };
  }
}
