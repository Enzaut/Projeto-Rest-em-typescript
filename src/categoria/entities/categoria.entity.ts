import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fruta } from 'src/fruta/entities/fruta.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Fruta, fruta => fruta.categoria)
  frutas: Fruta[];
}
