import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { Loja } from '../loja/entities/loja.entity';
import { Vendedor } from '../vendedor/entities/vendedor.entity';

@Injectable()
export class LojaService {
  constructor(
    @InjectRepository(Loja)
    private lojaRepo: Repository<Loja>,
    @InjectRepository(Vendedor)
    private vendedorRepo: Repository<Vendedor>,
  ) {}

  async create(dto: CreateLojaDto): Promise<Loja> {
    const vendedor = await this.vendedorRepo.findOne({ where: { id: dto.vendedorId } });
    if (!vendedor) throw new Error('Vendedor não encontrado');

    const loja = this.lojaRepo.create({ ...dto, vendedor });
    return this.lojaRepo.save(loja);
  }

  findAll(): Promise<Loja[]> {
    return this.lojaRepo.find({ relations: ['vendedor'] });
  }

  async findOne(id: number): Promise<Loja> {
    const loja = await this.lojaRepo.findOne({ where: { id }, relations: ['vendedor'] });
    if (!loja) throw new Error('Loja não encontrada');
    return loja;
  }

  async update(id: number, dto: UpdateLojaDto): Promise<Loja> {
    const loja = await this.findOne(id);

    if (dto.vendedorId) {
      const vendedor = await this.vendedorRepo.findOne({ where: { id: dto.vendedorId } });
      if (!vendedor) throw new Error('Vendedor inválido');
      loja.vendedor = vendedor;
    }

    Object.assign(loja, dto);
    return this.lojaRepo.save(loja);
  }

  async remove(id: number): Promise<Loja> {
    const loja = await this.findOne(id);
    return this.lojaRepo.remove(loja);
  }
}
