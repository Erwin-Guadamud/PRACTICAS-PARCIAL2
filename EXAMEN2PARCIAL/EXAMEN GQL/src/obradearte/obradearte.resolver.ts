import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ObraDeArteService } from './obradearte.service';
import { CreateObraDeArteInput } from './dto/create-obradearte.input';
import { UpdateObraDeArteDto} from './dto/update-obradearte.input';
import { ObraDeArte } from './entities//obradearte.entity';

@Resolver(() => ObraDeArte)
export class ObraDeArteResolver {
  constructor(private readonly obraDeArteService: ObraDeArteService) {}

  @Mutation(() => ObraDeArte)
  create(@Args('createObraDeArteInput') createObraDeArteInput: CreateObraDeArteInput): Promise<ObraDeArte> {
    return this.obraDeArteService.create(createObraDeArteInput);
  }

  @Query(() => [ObraDeArte], { name: 'obrasDeArte' })
  findAll() {
    return this.obraDeArteService.findAll();
  }

  @Query(() => ObraDeArte, { name: 'obraDeArte' })
  findOne(@Args('id') id: number): Promise<ObraDeArte> {
    return this.obraDeArteService.findOne(id);
  }

  @Mutation(() => ObraDeArte)
  update(@Args('updateObraDeArteInput') updateObraDeArteInput: UpdateObraDeArteDto): Promise<ObraDeArte> {
    return this.obraDeArteService.update(updateObraDeArteInput.id, updateObraDeArteInput);
  }

  @Mutation(() => ObraDeArte)
  remove(@Args('id') id: number): Promise<ObraDeArte> {
    return this.obraDeArteService.remove(id);
  }
}
