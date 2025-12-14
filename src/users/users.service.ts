import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Crear usuario
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  // Buscar todos
  findAll() {
    return this.userRepository.find();
  }

  // 👇 ESTA ES LA QUE FALTABA (Para el Controller)
  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  // 👇 ESTA ES LA QUE USA EL LOGIN (Para Auth)
  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  // Actualizar
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  // Borrar
  remove(id: number) {
    return this.userRepository.delete(id);
  }
}