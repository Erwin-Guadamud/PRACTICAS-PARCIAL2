import { SignovitalEntity } from '../../entities/Signovital.entity';
import { CiudadanoRepository } from '../../repositories/paciente.repository';


export interface DeleteCiudadanoUseCase {
  execute( id: number ): Promise<SignovitalEntity>
}


export class DeleteCiudadano implements DeleteCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( id: number ): Promise<SignovitalEntity> {
    return this.repository.deleteById(id);
  }

}

