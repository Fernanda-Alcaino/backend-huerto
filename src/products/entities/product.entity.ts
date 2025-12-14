// src/products/entities/product.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // Coincide con la columna 'name' de la BD
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column('text')
  description: string;

  @Column()
  stock: number;

  @Column({ nullable: true }) // Coincide con la columna 'imageUrl' de la BD
  imageUrl: string;

  @Column({ nullable: true })
  category: string;
}