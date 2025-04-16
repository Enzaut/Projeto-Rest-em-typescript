import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cidade } from '../cidade/cidade.entity';

@Entity()
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  matricula: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  dt_nascimento: string;

  @ManyToOne(() => Cidade, cidade => cidade.estudantes, { onDelete: 'CASCADE' })
  cidade: Cidade;
}
