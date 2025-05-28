import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrutaService } from './fruta.service';
import { CreateFrutaDto } from './dto/create-fruta.dto';
import { UpdateFrutaDto } from './dto/update-fruta.dto';

@Controller('fruta')
export class FrutaController {
  constructor(private readonly service: FrutaService) {}

  @Post()
  create(@Body() dto: CreateFrutaDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateFrutaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
