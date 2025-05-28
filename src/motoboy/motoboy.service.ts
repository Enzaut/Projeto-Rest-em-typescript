import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motoboy } from './entities/motoboy.entity';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';

@Injectable()
export class MotoboyService {
  constructor(
    @InjectRepository(Motoboy)
    private repo: Repository<Motoboy>,
  ) {}

  create(dto: CreateMotoboyDto): Promise<Motoboy> {
    const novo = this.repo.create(dto);
    return this.repo.save(novo);
  }

  findAll(): Promise<Motoboy[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Motoboy> {
    const motoboy = await this.repo.findOne({ where: { id } });
    if (!motoboy) throw new Error('Motoboy não encontrado');
    return motoboy;
  }

  async update(id: number, dto: UpdateMotoboyDto): Promise<Motoboy> {
    const motoboy = await this.findOne(id);
    Object.assign(motoboy, dto);
    return this.repo.save(motoboy);
  }

  async remove(id: number): Promise<Motoboy> {
    const motoboy = await this.findOne(id);
    return this.repo.remove(motoboy);
  }
}
