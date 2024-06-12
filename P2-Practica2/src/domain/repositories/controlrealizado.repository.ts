import { CreateControlrealizadoDto, UpdateControlrealizadoDto } from '../dtos';
import { ControlrealizadoEntity } from '../entities/Controlrealizado.entity';



export abstract class ControlrealizadoRepository {

  abstract create( createTodoDto: CreateControlrealizadoDto ): Promise<ControlrealizadoEntity>;
  abstract getAll(): Promise<ControlrealizadoEntity[]>;
  abstract findById( id: number ): Promise<ControlrealizadoEntity>;
  abstract updateById( updateTodoDto: UpdateControlrealizadoDto ): Promise<ControlrealizadoEntity>;
  abstract deleteById( id: number ): Promise<ControlrealizadoEntity>;

}