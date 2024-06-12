import { CreateSignovitalDto,
    SignovitalDatasource,
    SignovitalEntity,
    SignovitalRepository,
    UpdateSignovitalDto } from '../../domain';


export class SignovitalRepositoryImpl implements SignovitalRepository {

constructor(
private readonly datasource: SignovitalDatasource,
) { }


create( createSignovitalDto: CreateSignovitalDto ): Promise<SignovitalEntity> {
return this.datasource.create( createSignovitalDto );
}

getAll(): Promise<SignovitalEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<SignovitalEntity> {
return this.datasource.findById( id );
}

updateById( updateSignovitalDto: UpdateSignovitalDto ): Promise<SignovitalEntity> {
return this.datasource.updateById( updateSignovitalDto );
}

deleteById( id: number ): Promise<SignovitalEntity> {
return this.datasource.deleteById( id );
}

}


