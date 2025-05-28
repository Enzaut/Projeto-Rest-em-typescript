import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from './entities/administrador.entity';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private repo: Repository<Administrador>,
  ) {}

  create(dto: CreateAdministradorDto): Promise<Administrador> {
    const novo = this.repo.create(dto);
    return this.repo.save(novo);
  }

  findAll(): Promise<Administrador[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Administrador> {
    const adm = await this.repo.findOne({ where: { id } });
    if (!adm) throw new Error('Administrador não encontrado');
    return adm;
  }

  async update(id: number, dto: UpdateAdministradorDto): Promise<Administrador> {
    const adm = await this.findOne(id);
    Object.assign(adm, dto);
    return this.repo.save(adm);
  }

  async remove(id: number): Promise<Administrador> {
    const adm = await this.findOne(id);
    return this.repo.remove(adm);
  }
}
