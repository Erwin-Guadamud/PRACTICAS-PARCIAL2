import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObraDeArteService } from './obradearte.service';
import { CreateObraDeArteDto } from './dto/create-obradearte.dto';
import { UpdateObraDeArteDto } from './dto/update-obradearte.dto';

@Controller('obra-de-arte')
export class ObraDeArteController {
  constructor(private readonly obraDeArteService: ObraDeArteService) {}

  @Post()
  create(@Body() createObraDeArteDto: CreateObraDeArteDto) {
    return this.obraDeArteService.create(createObraDeArteDto);
  }

  @Get()
  findAll() {
    return this.obraDeArteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.obraDeArteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateObraDeArteDto: UpdateObraDeArteDto) {
    return this.obraDeArteService.update(id, updateObraDeArteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.obraDeArteService.remove(id);
  }
}
