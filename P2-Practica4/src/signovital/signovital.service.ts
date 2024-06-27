import { Injectable } from '@nestjs/common';
import { CreateSignoVitalInput } from './dto/create-signovital.input';
import { UpdateSignoVitalInput } from './dto/update-signovital.input';
import { SignoVital } from './entities/signovital.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SignoVitalService {
  constructor(
    @InjectRepository(SignoVital)
    private readonly signoVitalRepository: Repository<SignoVital>
  ) {}

  async create(createSignoVitalInput: CreateSignoVitalInput): Promise<SignoVital> {
    const created = this.signoVitalRepository.create(createSignoVitalInput);
    return await this.signoVitalRepository.save(created);
  }

  async findAll(estado: string): Promise<SignoVital[]> {
    if (estado === 'activo' || estado === 'desactivo') {
      return this.signoVitalRepository.find({ where: { estado } });
    }
    return await this.signoVitalRepository.find();
  }

  async findOne(id: number): Promise<SignoVital> {
    return await this.signoVitalRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSignoVitalInput: UpdateSignoVitalInput): Promise<SignoVital> {
    const updated = await this.signoVitalRepository.preload(updateSignoVitalInput);
    if (!updated) throw new Error(`SignoVital with id: ${id} not found`);
    return await this.signoVitalRepository.save(updated);
  }

  async remove(id: number) {
    const signoVital = await this.findOne(id);
    signoVital.estado = 'desactivo';
    return this.signoVitalRepository.save(signoVital);
  }
}
