import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UfService } from './uf.service';
import { UfController } from './uf.controller';
import { Uf } from './uf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Uf])],
  controllers: [UfController],
  providers: [UfService],
})
export class UfModule {}
