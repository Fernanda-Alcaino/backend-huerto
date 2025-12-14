import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // MÉTODOS ELIMINADOS TEMPORALMENTE PARA QUE NO FALLE LA COMPILACIÓN
  // (No los necesitas para el Login)
}
