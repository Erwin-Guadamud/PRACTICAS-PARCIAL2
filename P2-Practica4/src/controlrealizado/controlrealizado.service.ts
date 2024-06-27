import { Injectable } from '@nestjs/common';
import { CreateControlRealizadoInput } from './dto/create-controlrealizado.input';
import { UpdateControlRealizadoInput } from './dto/update-controlrealizado.input';
import { ControlRealizado } from './entities/controlrealizado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ControlRealizadoService {
  constructor(
    @InjectRepository(ControlRealizado)
    private readonly controlRealizadoRepository: Repository<ControlRealizado>
  ) {}

  async create(createControlRealizadoInput: CreateControlRealizadoInput): Promise<ControlRealizado> {
    const controlRealizado = await this.controlRealizadoRepository.create({
      ...createControlRealizadoInput,
      paciente: { id: createControlRealizadoInput.pacienteId },
      signoVital: { id: createControlRealizadoInput.signoVitalId }
    });
    const { id } = await this.controlRealizadoRepository.save(controlRealizado);
    return await this.findOne(+id);
  }

  async findAll(estado: string): Promise<ControlRealizado[]> {
    if (estado === 'activo' || estado === 'desactivo') {
      return this.controlRealizadoRepository.find({ where: { estado } });
    }
    return await this.controlRealizadoRepository.find();
  }

  async findOne(id: number): Promise<ControlRealizado> {
    return await this.controlRealizadoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateControlRealizadoInput: UpdateControlRealizadoInput): Promise<ControlRealizado> {
    const updated = await this.controlRealizadoRepository.preload(updateControlRealizadoInput);
    if (!updated) throw new Error(`ControlRealizado with id: ${id} not found`);
    return await this.controlRealizadoRepository.save(updated);
  }

  async remove(id: number) {
    const controlRealizado = await this.findOne(id);
    controlRealizado.estado = 'desactivo';
    return this.controlRealizadoRepository.save(controlRealizado);
  }
}
