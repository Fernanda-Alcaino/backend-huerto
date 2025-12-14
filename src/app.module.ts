import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module'; // Importa tu módulo de productos

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'huerto_db',

      // 🚨 ¡IMPORTANTE! Archivos de entidades.
      // Si TypeORM no las encuentra, la app fallará.
      // Asume que las entidades están en carpetas dentro de src/
      autoLoadEntities: true,

      // 🚨 ¡CLAVE! CAMBIAR A TRUE
      // Esto permite que TypeORM sincronice la estructura de tu Entidad con la BD.
      // Úsalo SÓLO en desarrollo. ¡Cámbialo a 'false' antes de subir a producción!
      synchronize: true,
    }),
    ProductsModule, // Asegúrate de que tu módulo de productos esté en los imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
