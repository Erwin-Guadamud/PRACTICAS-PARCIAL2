import { CreateSignovitalDto, UpdateSignovitalDto } from '../dtos';
import { SignovitalEntity } from '../entities/Signovital.entity';



export abstract class SignovitalRepository {

  abstract create( createPreguntaDto: CreateSignovitalDto ): Promise<SignovitalEntity>;
  abstract getAll(): Promise<SignovitalEntity[]>;
  abstract findById( id: number ): Promise<SignovitalEntity>;
  abstract updateById( updatePreguntaDto: UpdateSignovitalDto ): Promise<SignovitalEntity>;
  abstract deleteById( id: number ): Promise<SignovitalEntity>;

}