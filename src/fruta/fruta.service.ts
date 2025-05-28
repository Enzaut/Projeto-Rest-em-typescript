import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFrutaDto } from './dto/create-fruta.dto';
import { UpdateFrutaDto } from './dto/update-fruta.dto';
import { Fruta } from '../fruta/entities/fruta.entity';
import { Loja } from '../loja/entities/loja.entity';

@Injectable()
export class FrutaService {
  constructor(
    @InjectRepository(Fruta)
    private frutaRepo: Repository<Fruta>,
    @InjectRepository(Loja)
    private lojaRepo: Repository<Loja>,
  ) {}

  async create(dto: CreateFrutaDto): Promise<Fruta> {
    const loja = await this.lojaRepo.findOne({ where: { id: dto.lojaId } });
    if (!loja) throw new Error('Loja não encontrada');

    const fruta = this.frutaRepo.create({ ...dto, loja });
    return this.frutaRepo.save(fruta);
  }

  findAll(): Promise<Fruta[]> {
    return this.frutaRepo.find({ relations: ['loja'] });
  }

  async findOne(id: number): Promise<Fruta> {
    const fruta = await this.frutaRepo.findOne({ where: { id }, relations: ['loja'] });
    if (!fruta) throw new Error('Fruta não encontrada');
    return fruta;
  }

  async update(id: number, dto: UpdateFrutaDto): Promise<Fruta> {
    const fruta = await this.findOne(id);

    if (dto.lojaId) {
      const loja = await this.lojaRepo.findOne({ where: { id: dto.lojaId } });
      if (!loja) throw new Error('Loja inválida');
      fruta.loja = loja;
    }

    Object.assign(fruta, dto);
    return this.frutaRepo.save(fruta);
  }

  async remove(id: number): Promise<Fruta> {
    const fruta = await this.findOne(id);
    return this.frutaRepo.remove(fruta);
  }
}
