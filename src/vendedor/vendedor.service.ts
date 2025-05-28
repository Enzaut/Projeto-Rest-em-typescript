import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';
import { Vendedor } from '../vendedor/entities/vendedor.entity';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(Vendedor)
    private vendedorRepo: Repository<Vendedor>,
  ) {}

  create(dto: CreateVendedorDto): Promise<Vendedor> {
    return this.vendedorRepo.save(this.vendedorRepo.create(dto));
  }

  findAll(): Promise<Vendedor[]> {
    return this.vendedorRepo.find();
  }

  async findOne(id: number): Promise<Vendedor> {
    const vendedor = await this.vendedorRepo.findOne({ where: { id } });
    if (!vendedor) throw new Error('Vendedor não encontrado');
    return vendedor;
  }

  async update(id: number, dto: UpdateVendedorDto): Promise<Vendedor> {
    const vendedor = await this.findOne(id);
    Object.assign(vendedor, dto);
    return this.vendedorRepo.save(vendedor);
  }

  async remove(id: number): Promise<Vendedor> {
    const vendedor = await this.findOne(id);
    return this.vendedorRepo.remove(vendedor);
  }
}
