import { Injectable } from '@nestjs/common';
import { CreateSignoVitalDto } from './dto/create-signovital.dto';
import { UpdateSignovitalDto } from './dto/update-signovital.dto';
import { SignoVital } from './entities/signovital.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SignovitalService {
  constructor(
    @InjectRepository(SignoVital)
    private readonly signovitalRepository: Repository<SignoVital>
  ) {
    
  }
  async create(createSignovitalDto: CreateSignoVitalDto) {
    const signovital = this.signovitalRepository.create(createSignovitalDto);
    return this.signovitalRepository.save(signovital);
  }

  async findAll() {
    return this.signovitalRepository.find({ where: { estado: 'activo' } });
  }

  async findOne(id: string) {
    return this.signovitalRepository.findOne({ where: { id, estado: 'activo' } });
  }

  async update(id: string, updateSignovitalDto: UpdateSignovitalDto) {
    const updated= await this.signovitalRepository.update(id, updateSignovitalDto);
    return updated.affected > 0 ? this.signovitalRepository.findOne({ where: { id, estado: 'activo' } }) : null;
    
  }

  async remove(id: string) {
    const signoVital = await this.signovitalRepository.findOne({ where: { id } });
    if (signoVital) {
      signoVital.estado = 'inactivo';
      return this.signovitalRepository.save(signoVital);
    }
    return null;
  }
}
