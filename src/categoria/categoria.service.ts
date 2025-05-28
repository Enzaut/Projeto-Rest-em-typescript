import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../categoria/entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private repo: Repository<Categoria>,
  ) {}

  create(dto: CreateCategoriaDto): Promise<Categoria> {
    return this.repo.save(this.repo.create(dto));
  }

  findAll(): Promise<Categoria[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const cat = await this.repo.findOne({ where: { id } });
    if (!cat) throw new Error('Categoria não encontrada');
    return cat;
  }

  async update(id: number, dto: UpdateCategoriaDto): Promise<Categoria> {
    const cat = await this.findOne(id);
    Object.assign(cat, dto);
    return this.repo.save(cat);
  }

  async remove(id: number): Promise<Categoria> {
    const cat = await this.findOne(id);
    return this.repo.remove(cat);
  }
}
