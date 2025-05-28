import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';

@Entity()
export class ItemPedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, pedido => pedido.itens, { onDelete: 'CASCADE' })
  pedido: Pedido;

  @ManyToOne(() => Fruta)
  fruta: Fruta;

  @Column()
  quantidade: number;

  @Column('decimal')
  precoUnitario: number;
}
