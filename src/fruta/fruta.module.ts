import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fruta } from './entities/fruta.entity';
import { Loja } from '../loja/entities/loja.entity'; // 👈 Adiciona isso
import { FrutaService } from './fruta.service';
import { FrutaController } from './fruta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fruta, Loja])], // 👈 Inclui Loja aqui
  controllers: [FrutaController],
  providers: [FrutaService],
})
export class FrutaModule {}
