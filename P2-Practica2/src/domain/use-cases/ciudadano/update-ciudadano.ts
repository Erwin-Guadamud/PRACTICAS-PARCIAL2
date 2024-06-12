import { UpdateSignovitalDto } from '../../dtos';
import { SignovitalEntity } from '../../entities/Signovital.entity';
import { CiudadanoRepository } from '../../repositories/paciente.repository';


export interface UpdateCiudadanoUseCase {
  execute( dto: UpdateSignovitalDto ): Promise<SignovitalEntity>
}


export class UpdateCiudadano implements UpdateCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( dto: UpdateSignovitalDto ): Promise<SignovitalEntity> {
    return this.repository.updateById(dto);
  }

}

