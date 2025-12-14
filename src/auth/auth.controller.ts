import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import type { Response } from 'express'; // Usamos 'type' para evitar el error TS1272
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // 👈 Asegúrate de que diga 'export class'
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res() res: Response,
  ) {
    if (!body.email || !body.password) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Faltan datos (email o password)',
      });
    }

    const user = await this.authService.validateUser(body.email, body.password);

    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Credenciales incorrectas'
      });
    }

    return res.status(HttpStatus.OK).json({
      message: 'Login exitoso',
      user: user,
    });
  }
}
