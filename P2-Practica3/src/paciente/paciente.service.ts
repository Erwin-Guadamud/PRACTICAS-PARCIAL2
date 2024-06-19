import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>
  ) {
    
  }
  async create(createPacienteDto: CreatePacienteDto) {
    const Paciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(Paciente);
  }

  async findAll() {
    return await this.pacienteRepository.find();
  }

  async findOne(id: string) {
    return await this.pacienteRepository.findOneBy({id});
  }

  async update(id: string, updatePacienteDto: UpdatePacienteDto) {
    const updated= await this.pacienteRepository.update(id, updatePacienteDto);
    return updated.affected > 0 ? this.pacienteRepository.findOneBy({id}) : null;
    
  }

  async remove(id: string) {
    const paciente = await this.pacienteRepository.findOne({ where: { id } });
    if (paciente) {
      paciente.estado = 'inactivo';
      return this.pacienteRepository.save(paciente);
    }
    return null;
  }
}
