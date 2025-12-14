import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulos
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module'; // 👈 Creado con comando
import { UsersModule } from './users/users.module'; // 👈 Creado con comando
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'tienda.db', // 👈 Se creará este archivo
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    AuthModule,
    SalesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
