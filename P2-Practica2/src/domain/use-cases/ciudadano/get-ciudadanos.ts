import { SignovitalEntity } from '../../entities/Signovital.entity';
import { CiudadanoRepository } from '../../repositories/paciente.repository';


export interface GetCiudadanosUseCase {
  execute(): Promise<SignovitalEntity[]>
}


export class GetCiudadanos implements GetCiudadanosUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute(): Promise<SignovitalEntity[]> {
    return this.repository.getAll();
  }

}

