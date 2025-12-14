// src/products/entities/product.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products') // TypeORM usará este nombre de tabla
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // <-- Estructura deseada

  @Column('text')
  description: string;

  @Column('decimal') // Tipo para manejar precios
  price: number;

  @Column()
  stock: number;

  @Column({ nullable: true })
  imageUrl: string; // <-- Estructura deseada
}