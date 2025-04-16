import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstudanteService } from './estudante.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';

@Controller('estudantes')
export class EstudanteController {
  constructor(private readonly estudanteService: EstudanteService) {}

  @Post()
  create(@Body() dto: CreateEstudanteDto) {
    return this.estudanteService.create(dto);
  }

  @Get()
  findAll() {
    return this.estudanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudanteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEstudanteDto) {
    return this.estudanteService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudanteService.remove(+id);
  }
}
