import { prisma } from '../../data/postgres';
import { CreateSignovitalDto, SignovitalDatasource , SignovitalEntity, UpdateSignovitalDto } from '../../domain';




export class SignovitalDatasourceImpl implements SignovitalDatasource {

  async create( createSignovitalDto: CreateSignovitalDto ): Promise<SignovitalEntity> {
    const signovital = await prisma.signovital.create({
      data: createSignovitalDto!
    });

    return SignovitalEntity.fromObject( signovital );
  }

  async getAll(): Promise<SignovitalEntity[]> {
    const signovital = await prisma.signovital.findMany();
    return signovital.map( (signovital: { [key: string]: any; }) => SignovitalEntity.fromObject(signovital) );
  }

  async findById( id: number ): Promise<SignovitalEntity> {
    const signovital = await prisma.signovital.findFirst({
      where: { id }
    });

    if ( !signovital ) throw `Signovital with id ${ id } not found`;
    return SignovitalEntity.fromObject(signovital);
  }

  async updateById( updateSignovitalDto: UpdateSignovitalDto ): Promise<SignovitalEntity> {
    await this.findById( updateSignovitalDto.id );
    
    const updatedSignovital = await prisma.signovital.update({
      where: { id: updateSignovitalDto.id },
      data: updateSignovitalDto!.values
    });

    return SignovitalEntity.fromObject(updatedSignovital);
  }

  async deleteById( id: number ): Promise<SignovitalEntity> {
    await this.findById( id );
    const deleted = await prisma.signovital.delete({
      where: { id }
    });

    return SignovitalEntity.fromObject( deleted );
  }

}