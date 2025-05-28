import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotoboyService } from './motoboy.service';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';

@Controller('motoboy')
export class MotoboyController {
  constructor(private readonly service: MotoboyService) {}

  @Post()
  create(@Body() dto: CreateMotoboyDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMotoboyDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
