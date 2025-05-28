import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Loja } from 'src/loja/entities/loja.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Entity()
export class Fruta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;

  @Column()
  unidade: string;

  @ManyToOne(() => Loja, loja => loja.frutas, { onDelete: 'CASCADE' })
  loja: Loja;

  @ManyToOne(() => Categoria, categoria => categoria.frutas, { onDelete: 'SET NULL' })
  categoria: Categoria;
}
