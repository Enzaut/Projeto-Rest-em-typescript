import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudante } from './estudante.entity';
import { Repository } from 'typeorm';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { Cidade } from '../cidade/cidade.entity';


@Injectable()
export class EstudanteService {
  constructor(
    @InjectRepository(Estudante)
    private estudanteRepo: Repository<Estudante>,

    @InjectRepository(Cidade)
    private cidadeRepo: Repository<Cidade>,
  ) {}

  async create(dto: CreateEstudanteDto): Promise<Estudante> {
    const cidade = await this.cidadeRepo.findOne({ where: { id: dto.cidadeId } });
    if (!cidade) throw new Error('Cidade não encontrada');

    const estudante = this.estudanteRepo.create({
      nome: dto.nome,
      matricula: dto.matricula,
      email: dto.email,
      dt_nascimento: dto.dt_nascimento,
      cidade,
    });

    return this.estudanteRepo.save(estudante);
  }

  findAll(): Promise<Estudante[]> {
    return this.estudanteRepo.find({ relations: ['cidade'] });
  }

  async findOne(id: number): Promise<Estudante> {
    const estudante = await this.estudanteRepo.findOne({ where: { id }, relations: ['cidade'] });
    if (!estudante) {
      throw new Error('Estudante não encontrado');
    }
    return estudante;
  }

  async update(id: number, dto: UpdateEstudanteDto): Promise<Estudante> {
    const estudante = await this.estudanteRepo.findOne({ where: { id } });
    if (!estudante) throw new Error('Estudante não encontrado');

    if (dto.cidadeId) {
      const cidade = await this.cidadeRepo.findOne({ where: { id: dto.cidadeId } });
      if (!cidade) throw new Error('Cidade inválida');
      estudante.cidade = cidade;
    }

    Object.assign(estudante, dto);
    return this.estudanteRepo.save(estudante);
  }

  async remove(id: number): Promise<void> {
    const estudante = await this.estudanteRepo.findOne({ where: { id } });
    if (!estudante) throw new Error('Estudante não encontrado');
    await this.estudanteRepo.remove(estudante);
  }
}
