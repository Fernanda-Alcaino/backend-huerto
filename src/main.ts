import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
    // Cambiamos el tipo a NestExpressApplication para manejar archivos estáticos
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // 1. ACTIVAR CORS (Para que React se conecte)
    app.enableCors();

    // 2. ACTIVAR VALIDACIONES (DTOs funcionan gracias a esto)
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true, // Elimina datos basura que envíen por error
        forbidNonWhitelisted: true, // Da error si envían campos que no existen
    }));

    // 3. SERVIR IMÁGENES PÚBLICAS
    // Esto hace que la carpeta 'uploads' sea accesible en /uploads
    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
        prefix: '/uploads/',
    });

    await app.listen(3000);
}
bootstrap();