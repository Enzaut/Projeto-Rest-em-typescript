import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cidade } from './cidade.entity';
import { Repository } from 'typeorm';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Uf } from '../uf/uf.entity';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade)
    private cidadeRepository: Repository<Cidade>,

    @InjectRepository(Uf)
    private ufRepository: Repository<Uf>,
  ) {}

  async create(dto: CreateCidadeDto) {
    const uf = await this.ufRepository.findOne({ where: { id: dto.ufId } });
    if (!uf) throw new Error('UF não encontrada');

    const cidade = this.cidadeRepository.create({
      nome: dto.nome,
      uf: uf,
    });

    return this.cidadeRepository.save(cidade);
  }

  findAll() {
    return this.cidadeRepository.find({ relations: ['uf'] });
  }

  findOne(id: number) {
    return this.cidadeRepository.findOne({ where: { id }, relations: ['uf'] });
  }

  async update(id: number, dto: UpdateCidadeDto) {
    const cidade = await this.cidadeRepository.findOne({ where: { id } });
    if (!cidade) throw new Error('Cidade não encontrada');

    if (dto.ufId) {
      const uf = await this.ufRepository.findOne({ where: { id: dto.ufId } });
      if (!uf) throw new Error('UF não encontrada');
      cidade.uf = uf;
    }

    cidade.nome = dto.nome ?? cidade.nome;

    return this.cidadeRepository.save(cidade);
  }

  async remove(id: number) {
    const cidade = await this.cidadeRepository.findOne({ where: { id } });
    if (!cidade) throw new Error('Cidade não encontrada');
    return this.cidadeRepository.remove(cidade);
  }
}
