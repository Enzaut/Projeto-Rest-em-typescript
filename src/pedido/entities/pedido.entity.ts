import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Motoboy } from 'src/motoboy/entities/motoboy.entity';
import { ItemPedido } from 'src/item-pedido/entities/item-pedido.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @ManyToOne(() => Usuario, usuario => usuario.id, { onDelete: 'SET NULL' })
  usuario: Usuario;

  @ManyToOne(() => Motoboy, motoboy => motoboy.id, { onDelete: 'SET NULL' })
  motoboy: Motoboy;

  @OneToMany(() => ItemPedido, item => item.pedido, { cascade: true })
  itens: ItemPedido[];
}
