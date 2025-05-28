import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column({ default: true })
  ativo: boolean;
}
