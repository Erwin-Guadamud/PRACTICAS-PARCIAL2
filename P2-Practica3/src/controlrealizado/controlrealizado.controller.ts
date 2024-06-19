import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlrealizadoService } from './controlrealizado.service';
import { CreateControlRealizadoDto } from './dto/create-controlrealizado.dto';
import { UpdateControlrealizadoDto } from './dto/update-controlrealizado.dto';

@Controller('controlrealizado')
export class ControlrealizadoController {
  constructor(private readonly controlrealizadoService: ControlrealizadoService) {}

  @Post()
  create(@Body() createControlrealizadoDto: CreateControlRealizadoDto) {
    return this.controlrealizadoService.create(createControlrealizadoDto);
  }

  @Get()
  findAll() {
    return this.controlrealizadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlrealizadoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlrealizadoDto: UpdateControlrealizadoDto) {
    return this.controlrealizadoService.update(id, updateControlrealizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlrealizadoService.remove(id);
  }
}
