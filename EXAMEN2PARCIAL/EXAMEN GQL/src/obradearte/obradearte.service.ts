import { Injectable } from '@nestjs/common';
import { CreateObraDeArteInput } from './dto/create-obradearte.input';
import { UpdateObraDeArteDto } from './dto/update-obradearte.input';
import { ObraDeArte } from './entities/obradearte.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ObraDeArteService {
  constructor(
    @InjectRepository(ObraDeArte)
    private readonly obraDeArteRepository: Repository<ObraDeArte>
  ) {}

  async create(createObraDeArteInput: CreateObraDeArteInput): Promise<ObraDeArte> {
    const created = this.obraDeArteRepository.create(createObraDeArteInput);
    return await this.obraDeArteRepository.save(created);
  }

  async findAll(): Promise<ObraDeArte[]> {
    return await this.obraDeArteRepository.find();
  }

  async findOne(id: number): Promise<ObraDeArte> {
    return await this.obraDeArteRepository.findOne({ where: { id } });
  }

  async update(id: number, updateObraDeArteInput: UpdateObraDeArteDto): Promise<ObraDeArte> {
    const updated = await this.obraDeArteRepository.preload({
      id,
      ...updateObraDeArteInput,
    });
    if (!updated) throw new Error(`Obra de Arte with id: ${id} not found`);
    return await this.obraDeArteRepository.save(updated);
  }

  async remove(id: number): Promise<ObraDeArte> {
    const obraDeArte = await this.findOne(id);
    if (!obraDeArte) throw new Error(`Obra de Arte with id: ${id} not found`);
    return await this.obraDeArteRepository.remove(obraDeArte);
  }
}
