import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Motoboy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  telefone: string;

  @Column({ default: true })
  ativo: boolean;
}
