/* eslint-disable */
// 👆 Esta línea de arriba desactiva las quejas de estilo en este archivo

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: any) {
    // Usamos 'any' para evitar líos de tipos ahora mismo
    const user: any = await this.usersService.findOneByEmail(loginDto.email);

    // Si no existe, lanzamos error
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Comparamos contraseña
    if (user.password !== loginDto.password) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    // Generamos el Token
    const payload = { email: user.email, sub: user.id, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}