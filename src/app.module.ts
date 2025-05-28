import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Usuario } from './usuario/entities/usuario.entity';
import { Administrador } from './administrador/entities/administrador.entity';
import { Motoboy } from './motoboy/entities/motoboy.entity';
import { Vendedor } from './vendedor/entities/vendedor.entity';
import { Loja } from './loja/entities/loja.entity';
import { Fruta } from './fruta/entities/fruta.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { Pedido } from './pedido/entities/pedido.entity';
import { ItemPedido } from './item-pedido/entities/item-pedido.entity';
import { Endereco } from './endereco/entities/endereco.entity';

import { UsuarioModule } from './usuario/usuario.module';
import { AdministradorModule } from './administrador/administrador.module';
import { MotoboyModule } from './motoboy/motoboy.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { LojaModule } from './loja/loja.module';
import { FrutaModule } from './fruta/fruta.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PedidoModule } from './pedido/pedido.module';
import { ItemPedidoModule } from './item-pedido/item-pedido.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [
        Usuario, Administrador, Motoboy,
        Vendedor, Loja, Fruta, Categoria,
        Pedido, ItemPedido, Endereco
      ],
      synchronize: true,
    }),
    UsuarioModule,
    AdministradorModule,
    MotoboyModule,
    VendedorModule,
    LojaModule,
    FrutaModule,
    CategoriaModule,
    PedidoModule,
    ItemPedidoModule,
    EnderecoModule,
  ],
})
export class AppModule {}