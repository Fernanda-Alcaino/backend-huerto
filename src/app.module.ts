import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// 👇 IMPORTA LOS NUEVOS MÓDULOS AQUÍ
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity'; // Importa la entidad User para cargarla

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/api/uploads',
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'huerto_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Esto carga Product y User automáticamente
      synchronize: false, // Déjalo en false si ya creaste las tablas en SQL
    }),

    ProductsModule,
    AuthModule,  // 👈 AGREGA ESTO
    UsersModule, // 👈 AGREGA ESTO
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}