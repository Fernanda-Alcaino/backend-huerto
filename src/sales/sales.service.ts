import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm'; // 👈 Importante
import { Repository } from 'typeorm';               // 👈 Importante
import { Sale } from './entities/sale.entity';      // 👈 Importante

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ) {}

  create(createSaleDto: CreateSaleDto) {
    // Agregamos la fecha actual automáticamente
    const newSale = this.saleRepository.create({
      ...createSaleDto,
      date: new Date(),
    });
    return this.saleRepository.save(newSale);
  }

  findAll() {
    return this.saleRepository.find();
  }

  findOne(id: number) {
    return this.saleRepository.findOneBy({ id });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.saleRepository.update(id, updateSaleDto);
  }

  remove(id: number) {
    return this.saleRepository.delete(id);
  }
}