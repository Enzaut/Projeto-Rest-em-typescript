

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from '../usuario/entities/usuario.entity';
import { Motoboy } from '../motoboy/entities/motoboy.entity';
import { Pedido } from '../pedido/entities/pedido.entity'

import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private repo: Repository<Pedido>,
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    @InjectRepository(Motoboy)
    private motoboyRepo: Repository<Motoboy>,
  ) {}

  async create(dto: CreatePedidoDto): Promise<Pedido> {
    const usuario = await this.usuarioRepo.findOne({ where: { id: dto.usuarioId } });
    const motoboy = await this.motoboyRepo.findOne({ where: { id: dto.motoboyId } });

    if (!usuario) throw new Error('Usuário inválido');
    if (!motoboy) throw new Error('Motoboy inválido');

    const pedido = this.repo.create({ ...dto, usuario, motoboy });
    return this.repo.save(pedido);
  }

  findAll(): Promise<Pedido[]> {
    return this.repo.find({ relations: ['usuario', 'motoboy'] });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.repo.findOne({ where: { id }, relations: ['usuario', 'motoboy'] });
    if (!pedido) throw new Error('Pedido não encontrado');
    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);

    if (dto.usuarioId) {
      const usuario = await this.usuarioRepo.findOne({ where: { id: dto.usuarioId } });
      if (!usuario) throw new Error('Usuário inválido');
      pedido.usuario = usuario;
    }

    if (dto.motoboyId) {
      const motoboy = await this.motoboyRepo.findOne({ where: { id: dto.motoboyId } });
      if (!motoboy) throw new Error('Motoboy inválido');
      pedido.motoboy = motoboy;
    }

    Object.assign(pedido, dto);
    return this.repo.save(pedido);
  }

  async remove(id: number): Promise<Pedido> {
    const pedido = await this.findOne(id);
    return this.repo.remove(pedido);
  }
}
