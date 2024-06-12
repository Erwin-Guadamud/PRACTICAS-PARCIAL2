import { prisma } from '../../data/postgres';
import { CreateControlrealizadoDto, ControlrealizadoDatasource , ControlrealizadoEntity, UpdateControlrealizadoDto } from '../../domain';




export class ControlrealizadoDatasourceImpl implements ControlrealizadoDatasource {

  async create( createControlrealizadoDto: CreateControlrealizadoDto ): Promise<ControlrealizadoEntity> {
    const controlrealizado = await prisma.controlrealizado.create({
      data: createControlrealizadoDto!
    });

    return ControlrealizadoEntity.fromObject( controlrealizado );
  }

  async getAll(): Promise<ControlrealizadoEntity[]> {
    const controlrealizado = await prisma.controlrealizado.findMany();
    return controlrealizado.map( (controlrealizado: { [key: string]: any; }) => ControlrealizadoEntity.fromObject(controlrealizado) );
  }

  async findById( id: number ): Promise<ControlrealizadoEntity> {
    const controlrealizado = await prisma.controlrealizado.findFirst({
      where: { id }
    });

    if ( !controlrealizado ) throw `Controlrealizado with id ${ id } not found`;
    return ControlrealizadoEntity.fromObject(controlrealizado);
  }

  async updateById( updateControlrealizadoDto: UpdateControlrealizadoDto ): Promise<ControlrealizadoEntity> {
    await this.findById( updateControlrealizadoDto.id );
    
    const updatedControlrealizado = await prisma.controlrealizado.update({
      where: { id: updateControlrealizadoDto.id },
      data: updateControlrealizadoDto!.values
    });

    return ControlrealizadoEntity.fromObject(updatedControlrealizado);
  }

  async deleteById( id: number ): Promise<ControlrealizadoEntity> {
    await this.findById( id );
    const deleted = await prisma.controlrealizado.delete({
      where: { id }
    });

    return ControlrealizadoEntity.fromObject( deleted );
  }

}