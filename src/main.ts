import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 1. CORS CONFIGURADO CORRECTAMENTE
  // Esto es vital para que tu Frontend (http://localhost:5173) pueda hacer login
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Puertos comunes de React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 2. PIPES DE VALIDACIÓN (Para que funcionen los DTOs)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina datos que no estén en el DTO
    forbidNonWhitelisted: true, // Lanza error si envían datos extra
    transform: true, // Convierte tipos automáticamente (ej: string "1" a number 1)
  }));

  // 3. ARCHIVOS ESTÁTICOS (Imágenes)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  await app.listen(3000);
  console.log(`🚀 Servidor NestJS corriendo en: http://localhost:3000`);
}
bootstrap();