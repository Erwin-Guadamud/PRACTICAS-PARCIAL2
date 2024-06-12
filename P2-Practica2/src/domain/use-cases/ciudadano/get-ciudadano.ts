import { SignovitalEntity } from '../../entities/Signovital.entity';
import { CiudadanoRepository } from '../../repositories/paciente.repository';


export interface GetCiudadanoUseCase {
  execute( id: number ): Promise<SignovitalEntity>
}


export class GetCiudadano implements GetCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( id: number ): Promise<SignovitalEntity> {
    return this.repository.findById(id);
  }

}

