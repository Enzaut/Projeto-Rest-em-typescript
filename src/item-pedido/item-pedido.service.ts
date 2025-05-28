import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemPedido } from './entities/item-pedido.entity';
import { Fruta } from '../fruta/entities/fruta.entity';
import { Pedido } from '../pedido/entities/pedido.entity';

import { CreateItemPedidoDto } from './dto/create-item-pedido.dto';
import { UpdateItemPedidoDto } from './dto/update-item-pedido.dto';

@Injectable()
export class ItemPedidoService {
  constructor(
    @InjectRepository(ItemPedido)
    private repo: Repository<ItemPedido>,

    @InjectRepository(Fruta)
    private frutaRepo: Repository<Fruta>,

    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
  ) {}

  async create(dto: CreateItemPedidoDto): Promise<ItemPedido> {
    const fruta = await this.frutaRepo.findOne({ where: { id: dto.frutaId } });
    const pedido = await this.pedidoRepo.findOne({ where: { id: dto.pedidoId } });

    if (!fruta) throw new Error('Fruta inválida');
    if (!pedido) throw new Error('Pedido inválido');

    const item = this.repo.create({ ...dto, fruta, pedido });
    return this.repo.save(item);
  }

  findAll(): Promise<ItemPedido[]> {
    return this.repo.find({ relations: ['fruta', 'pedido'] });
  }

  async findOne(id: number): Promise<ItemPedido> {
    const item = await this.repo.findOne({ where: { id }, relations: ['fruta', 'pedido'] });
    if (!item) throw new Error('Item não encontrado');
    return item;
  }

  async update(id: number, dto: UpdateItemPedidoDto): Promise<ItemPedido> {
    const item = await this.findOne(id);

    if (dto.frutaId) {
      const fruta = await this.frutaRepo.findOne({ where: { id: dto.frutaId } });
      if (!fruta) throw new Error('Fruta inválida');
      item.fruta = fruta;
    }

    if (dto.pedidoId) {
      const pedido = await this.pedidoRepo.findOne({ where: { id: dto.pedidoId } });
      if (!pedido) throw new Error('Pedido inválido');
      item.pedido = pedido;
    }

    Object.assign(item, dto);
    return this.repo.save(item);
  }

  async remove(id: number): Promise<ItemPedido> {
    const item = await this.findOne(id);
    return this.repo.remove(item);
  }
}
