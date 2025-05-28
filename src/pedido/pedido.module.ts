import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Motoboy } from '../motoboy/entities/motoboy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Usuario, Motoboy])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
