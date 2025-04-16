import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './cidade.entity';
import { Uf } from '../uf/uf.entity';
import { CidadeService } from './cidade.service';
import { CidadeController } from './cidade.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade, Uf])],
  controllers: [CidadeController],
  providers: [CidadeService],
})
export class CidadeModule {}
