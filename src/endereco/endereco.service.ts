import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from '../endereco/entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private repo: Repository<Endereco>,
  ) {}

  create(dto: CreateEnderecoDto): Promise<Endereco> {
    return this.repo.save(this.repo.create(dto));
  }

  findAll(): Promise<Endereco[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Endereco> {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new Error('Endereço não encontrado');
    return item;
  }

  async update(id: number, dto: UpdateEnderecoDto): Promise<Endereco> {
    const item = await this.findOne(id);
    Object.assign(item, dto);
    return this.repo.save(item);
  }

  async remove(id: number): Promise<Endereco> {
    const item = await this.findOne(id);
    return this.repo.remove(item);
  }
}
