import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common'; // Asegúrate de que esta ruta esté bien

@Controller('ventas') // 👈 ¡CAMBIO IMPORTANTE! Antes decía 'sales'
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }
}
