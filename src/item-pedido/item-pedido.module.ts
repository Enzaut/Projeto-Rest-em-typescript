import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPedido } from './entities/item-pedido.entity';
import { Fruta } from '../fruta/entities/fruta.entity';
import { Pedido } from '../pedido/entities/pedido.entity';
import { ItemPedidoService } from './item-pedido.service';
import { ItemPedidoController } from './item-pedido.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItemPedido, Fruta, Pedido])],
  controllers: [ItemPedidoController],
  providers: [ItemPedidoService],
})
export class ItemPedidoModule {}
