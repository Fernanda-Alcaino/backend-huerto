import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity'; // 👈 Asegúrate de que esta ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // 👈 Conectamos la entidad a TypeORM
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}