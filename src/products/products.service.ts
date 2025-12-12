import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

    // Inyectamos el Repositorio de TypeORM para manejar la tabla 'products'
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    // CREAR (POST)
    async create(createProductDto: CreateProductDto) {
        const product = this.productRepository.create(createProductDto);
        return await this.productRepository.save(product);
    }

    // LEER TODOS (GET)
    async findAll() {
        return await this.productRepository.find();
    }

    // LEER UNO (GET :id)
    async findOne(id: number) {
        const product = await this.productRepository.findOneBy({ id });
        if (!product) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return product;
    }

    // BORRAR (DELETE)
    async remove(id: number) {
        const product = await this.findOne(id); // Reutilizamos la lógica de buscar
        return await this.productRepository.remove(product);
    }
}