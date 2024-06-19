import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignovitalService } from './signovital.service';
import { CreateSignoVitalDto } from './dto/create-signovital.dto';
import { UpdateSignovitalDto } from './dto/update-signovital.dto';

@Controller('signovital')
export class SignovitalController {
  constructor(private readonly signovitalService: SignovitalService) {}

  @Post()
  create(@Body() createSignovitalDto: CreateSignoVitalDto) {
    return this.signovitalService.create(createSignovitalDto);
  }

  @Get()
  findAll() {
    return this.signovitalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signovitalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignovitalDto: UpdateSignovitalDto) {
    return this.signovitalService.update(id, updateSignovitalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signovitalService.remove(id);
  }
}
