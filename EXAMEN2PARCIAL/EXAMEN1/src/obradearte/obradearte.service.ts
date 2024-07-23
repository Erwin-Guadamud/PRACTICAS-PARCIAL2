import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateObraDeArteDto } from './dto/create-obradearte.dto';
import { UpdateObraDeArteDto } from './dto/update-obradearte.dto';
import { Repository, DeleteResult } from 'typeorm';
import { ObraDeArte } from './entities/obradearte.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ObraDeArteService {
  constructor(
    @InjectRepository(ObraDeArte)
    private readonly obraDeArteRepository: Repository<ObraDeArte>
  ) {}

  async create(createObraDeArteDto: CreateObraDeArteDto) {
    const obraDeArte = this.obraDeArteRepository.create({
      ...createObraDeArteDto,
      evaluadoEn: parseFloat(createObraDeArteDto.evaluadoEn.replace(/[$,]/g, '')),
    });
    await this.obraDeArteRepository.save(obraDeArte);
    return obraDeArte;
  }

  async findAll() {
    return this.obraDeArteRepository.find({
      where: { deletedAt: null } // Solo registros que no están marcados como eliminados
    });
  }

  async findOne(id: number) {
    const obraDeArte = await this.obraDeArteRepository.findOne({
      where: { id, deletedAt: null }
    });
    if (!obraDeArte) {
      throw new NotFoundException(`Obra de arte con ID ${id} no encontrada`);
    }
    return obraDeArte;
  }

  async update(id: number, updateObraDeArteDto: UpdateObraDeArteDto) {
    const obraDeArte = await this.obraDeArteRepository.preload({
      id,
      ...updateObraDeArteDto,
      evaluadoEn: updateObraDeArteDto.evaluadoEn ? parseFloat(updateObraDeArteDto.evaluadoEn.replace(/[$,]/g, '')) : undefined,
    });
    if (!obraDeArte) {
      throw new NotFoundException(`Obra de arte con ID ${id} no encontrada`);
    }
    return this.obraDeArteRepository.save(obraDeArte);
  }

  async remove(id: number, physical: boolean = false): Promise<ObraDeArte | DeleteResult> {
    const obraDeArte = await this.findOne(id);
    if (!obraDeArte) {
      throw new NotFoundException(`Obra de arte con ID ${id} no encontrada`);
    }

    if (physical) {
      // Eliminación física
      return this.obraDeArteRepository.remove(obraDeArte);
    } else {
      // Eliminación lógica
      obraDeArte.deletedAt = new Date();
      return this.obraDeArteRepository.save(obraDeArte);
    }
  }
}
