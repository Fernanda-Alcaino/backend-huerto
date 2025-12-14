import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 Importar
import { Sale } from './entities/sale.entity'; // 👈 Importar

@Module({
  imports: [TypeOrmModule.forFeature([Sale])], // 👈 ¡ESTO ES VITAL!
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
