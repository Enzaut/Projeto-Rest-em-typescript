import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cidade } from 'src/cidade/cidade.entity';

@Entity()
export class Uf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  sigla: string;

  @OneToMany(() => Cidade, cidade => cidade.uf)
  cidades: Cidade[];
}
