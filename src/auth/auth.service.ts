// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity'; // 👈 Asegúrate de importar esto

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  // 🚨 CORRECCIÓN: Cambiamos ': Promise<any>' por ': Promise<User | null>'
  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === pass) {
      // Quitamos la contraseña del objeto antes de devolverlo
      const { password, ...result } = user;

      // 'as User' es un truco para decirle a TypeScript que confíe
      // en que esto sigue siendo un usuario, aunque le quitamos el password.
      return result as User;
    }

    return null;
  }
}