import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motoboy } from './entities/motoboy.entity';
import { MotoboyService } from './motoboy.service';
import { MotoboyController } from './motoboy.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Motoboy])],
  controllers: [MotoboyController],
  providers: [MotoboyService],
})
export class MotoboyModule {}
