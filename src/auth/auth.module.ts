import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller'; // 👈 ¿Está importado aquí?
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController], // 👈 ¡ESTO ES CLAVE! Sin esto, el login da 404
  providers: [AuthService],
})
export class AuthModule {}
