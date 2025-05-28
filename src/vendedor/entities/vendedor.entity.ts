import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Loja } from 'src/loja/entities/loja.entity';

@Entity()
export class Vendedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @OneToMany(() => Loja, loja => loja.vendedor)
  lojas: Loja[];
  
}
