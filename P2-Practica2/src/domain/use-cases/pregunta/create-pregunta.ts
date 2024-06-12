import { CreatePacienteDto } from '../../dtos';
import { PacienteEntity } from '../../entities/Paciente.entity';
import { PreguntaRepository } from '../../repositories/signovital.repository';


export interface CreatePreguntaUseCase {
  execute( dto: CreatePacienteDto ): Promise<PacienteEntity>
}


export class CreatePregunta implements CreatePreguntaUseCase {
  
  constructor(
    private readonly repository: PreguntaRepository,
  ) {}
  
  execute( dto: CreatePacienteDto ): Promise<PacienteEntity> {
    return this.repository.create(dto);
  }

}

