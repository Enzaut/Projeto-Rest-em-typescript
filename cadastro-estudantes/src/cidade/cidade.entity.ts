import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Uf } from '../uf/uf.entity';
import { Estudante } from '../estudante/estudante.entity';

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @ManyToOne(() => Uf, uf => uf.cidades, { onDelete: 'CASCADE' })
  uf: Uf;

  @OneToMany(() => Estudante, estudante => estudante.cidade)
  estudantes: Estudante[];
}
