import { CreateSignovitalDto, UpdateSignovitalDto } from '../dtos';
import { SignovitalEntity } from '../entities/Signovital.entity';



export abstract class SignovitalDatasource {

  abstract create( createTodoDto: CreateSignovitalDto ): Promise<SignovitalEntity>;
  abstract getAll(): Promise<SignovitalEntity[]>;
  abstract findById( id: number ): Promise<SignovitalEntity>;
  abstract updateById( updateTodoDto: UpdateSignovitalDto ): Promise<SignovitalEntity>;
  abstract deleteById( id: number ): Promise<SignovitalEntity>;

}