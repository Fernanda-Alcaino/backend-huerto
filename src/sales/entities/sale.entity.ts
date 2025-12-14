import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('sales')
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  total: number;

  @Column('json') // 👈 Aquí se guarda el carrito completo
  items: any;

  @CreateDateColumn()
  date: Date;

  @Column()
  userEmail: string;
}
