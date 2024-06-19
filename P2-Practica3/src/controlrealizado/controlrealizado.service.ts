import { Injectable } from '@nestjs/common';
import { CreateControlRealizadoDto } from './dto/create-controlrealizado.dto';
import { UpdateControlrealizadoDto } from './dto/update-controlrealizado.dto';
import { ControlRealizado } from './entities/controlrealizado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ControlrealizadoService {
  constructor(
    @InjectRepository(ControlRealizado)
    private readonly controlrealizadoRepository: Repository<ControlRealizado>
  ) {
    
  }
  async create(createControlrealizadoDto: CreateControlRealizadoDto) {
    const ControlRealizado = this.controlrealizadoRepository.create({
      ...createControlrealizadoDto,
      paciente: { id: createControlrealizadoDto.pacienteId },
      signoVital: { id: createControlrealizadoDto.signoVitalId }
    });
    await this.controlrealizadoRepository.save(ControlRealizado);
    return ControlRealizado;
  }

  async findAll() {
    return await this.controlrealizadoRepository.find();
  }

  async findOne(id: string) {
    return await this.controlrealizadoRepository.findOneBy({id});
  }

  async update(id: string, updateControlrealizadoDto: UpdateControlrealizadoDto) {
    const updated= await this.controlrealizadoRepository.update(id, updateControlrealizadoDto);
    return updated.affected > 0 ? this.controlrealizadoRepository.findOneBy({id}) : null;

    
  }

  async remove(id: string) {
    const controlRealizado = await this.controlrealizadoRepository.findOne({ where: { id } });
    if (controlRealizado) {
      controlRealizado.estado = 'inactivo';
      return this.controlrealizadoRepository.save(controlRealizado);
    }
    return null;
  }
}
