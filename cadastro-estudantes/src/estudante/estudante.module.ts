import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudante } from './estudante.entity';
import { EstudanteService } from './estudante.service';
import { EstudanteController } from './estudante.controller';
import { Cidade } from '../cidade/cidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudante, Cidade])],
  controllers: [EstudanteController],
  providers: [EstudanteService],
})
export class EstudanteModule {}
