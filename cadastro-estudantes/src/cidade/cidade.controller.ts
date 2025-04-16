import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Controller('cidades')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @Post()
  create(@Body() dto: CreateCidadeDto) {
    return this.cidadeService.create(dto);
  }

  @Get()
  findAll() {
    return this.cidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cidadeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCidadeDto) {
    return this.cidadeService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cidadeService.remove(+id);
  }
}
