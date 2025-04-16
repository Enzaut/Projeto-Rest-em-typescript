import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uf } from './uf.entity';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';

@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private readonly ufRepository: Repository<Uf>,
  ) {}

  async create(createUfDto: CreateUfDto): Promise<Uf> {
    const novaUf = this.ufRepository.create(createUfDto);
    return await this.ufRepository.save(novaUf);
  }

  findAll(): Promise<Uf[]> {
    return this.ufRepository.find({ relations: ['cidades'] });
  }

  async findOne(id: number): Promise<Uf> {
    const uf = await this.ufRepository.findOne({ where: { id }, relations: ['cidades'] });
    if (!uf) {
      throw new Error('UF não encontrada');
    }
    return uf;
  }
  
  async update(id: number, updateUfDto: UpdateUfDto): Promise<Uf> {
    await this.ufRepository.update(id, updateUfDto);
    
    const uf = await this.ufRepository.findOne({ where: { id } });
    if (!uf) {
      throw new Error('UF não encontrada');
    }
  return uf;
}

    async remove(id: number): Promise<void> {
      const uf = await this.ufRepository.findOne({ where: { id } });
      if (!uf) {
        throw new Error('UF não encontrada');
      }
      await this.ufRepository.remove(uf);
    }
    }
