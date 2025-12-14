import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // 👈 Importamos Usuarios
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, // Para buscar si el usuario existe
    JwtModule.register({
      secret: 'SECRETO_SUPER_SECRETO', // En producción esto va en .env
      signOptions: { expiresIn: '1h' }, // El token dura 1 hora
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}