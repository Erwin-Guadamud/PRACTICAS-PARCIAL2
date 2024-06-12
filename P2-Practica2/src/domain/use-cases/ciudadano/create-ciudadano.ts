import { CreateSignovitalDto } from '../../dtos';
import { SignovitalEntity } from '../../entities/Signovital.entity';
import { CiudadanoRepository } from '../../repositories/paciente.repository';


export interface CreateCiudadanoUseCase {
  execute( dto: CreateSignovitalDto ): Promise<SignovitalEntity>
}


export class CreateCiudadano implements CreateCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( dto: CreateSignovitalDto ): Promise<SignovitalEntity> {
    return this.repository.create(dto);
  }

}

