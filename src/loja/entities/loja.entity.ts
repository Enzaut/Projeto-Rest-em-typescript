import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @Column()
  endereco: string;

  @ManyToOne(() => Vendedor, vendedor => vendedor.lojas, { onDelete: 'CASCADE' })
  vendedor: Vendedor;

  @OneToMany(() => Fruta, fruta => fruta.loja)
  frutas: Fruta[];
}
