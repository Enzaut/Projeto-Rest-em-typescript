import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loja } from './entities/loja.entity';
import { Vendedor } from '../vendedor/entities/vendedor.entity'; // importar a entidade Vendedor
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Loja, Vendedor])], // incluir Vendedor aqui
  controllers: [LojaController],
  providers: [LojaService],
})
export class LojaModule {}
