import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',      // <--- Pon tu contraseña si tienes
            database: 'huerto_db',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // ¡IMPORTANTE! Esto crea las tablas automáticamente (Entities -> DB)
        }),
        ProductsModule,
    ],
})
export class AppModule {}