import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

// 🚨 IMPORTACIONES NECESARIAS PARA SERVIR ARCHIVOS ESTÁTICOS
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'; // <--- ¡Asegúrate de que esta línea esté presente!
@Module({
  imports: [
    // ----------------------------------------------------
    // 1. CONFIGURACIÓN DEL SERVIDOR DE ARCHIVOS ESTÁTICOS
    // ----------------------------------------------------
    ServeStaticModule.forRoot({
      // Define la ruta física donde NestJS debe buscar los archivos (uploads)
      // join(__dirname, '..', 'uploads') apunta a la carpeta 'uploads' en la raíz.
      rootPath: join(__dirname, '..', 'uploads'),

      // Define la URL pública para acceder a ellos: http://localhost:3000/api/uploads/
      serveRoot: '/api/uploads',
    }),

    // ----------------------------------------------------
    // 2. CONFIGURACIÓN DE BASE DE DATOS (TYPEORM)
    // ----------------------------------------------------
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'huerto_db',

      // Carga automáticamente las Entidades que encuentre en las carpetas.
      autoLoadEntities: true,

      // 🚨 ¡CLAVE! CAMBIAR A FALSE
      // Ya que la BD está creada manualmente y poblada, desactivamos la sincronización.
      // Esto previene sobrescribir tu base de datos si ocurre un error.
      synchronize: false,
    }),

    // ----------------------------------------------------
    // 3. MÓDULOS DE LA APLICACIÓN
    // ----------------------------------------------------
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
