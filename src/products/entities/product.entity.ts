import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products') // Nombre de la tabla en MySQL
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    image: string; // Guardaremos solo el nombre "tomate.jpg"
}