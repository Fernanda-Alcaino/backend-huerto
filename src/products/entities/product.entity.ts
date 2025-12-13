import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products') // Nombre de la tabla en PostgreSQL
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal') // O 'float'
  price: number;

  @Column('int')
  stock: number;
}
