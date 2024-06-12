import { CreateControlrealizadoDto,
    ControlrealizadoDatasource,
    ControlrealizadoEntity,
    ControlrealizadoRepository,
    UpdateControlrealizadoDto } from '../../domain';


export class ControlrealizadoRepositoryImpl implements ControlrealizadoRepository {

constructor(
private readonly datasource: ControlrealizadoDatasource,
) { }


create( createControlrealizadoDto: CreateControlrealizadoDto ): Promise<ControlrealizadoEntity> {
return this.datasource.create( createControlrealizadoDto );
}

getAll(): Promise<ControlrealizadoEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<ControlrealizadoEntity> {
return this.datasource.findById( id );
}

updateById( updateControlrealizadoDto: UpdateControlrealizadoDto ): Promise<ControlrealizadoEntity> {
return this.datasource.updateById( updateControlrealizadoDto );
}

deleteById( id: number ): Promise<ControlrealizadoEntity> {
return this.datasource.deleteById( id );
}

}


