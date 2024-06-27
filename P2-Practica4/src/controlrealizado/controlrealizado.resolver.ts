import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ControlRealizadoService } from './controlrealizado.service';
import { CreateControlRealizadoInput } from './dto/create-controlrealizado.input';
import { UpdateControlRealizadoInput } from './dto/update-controlrealizado.input';
import { ControlRealizado } from './entities/controlrealizado.entity';

@Resolver(() => ControlRealizado)
export class ControlRealizadoResolver {
  constructor(private readonly controlRealizadoService: ControlRealizadoService) {}

  @Mutation(() => ControlRealizado)
  createControlRealizado(@Args('createControlRealizadoInput') createControlRealizadoInput: CreateControlRealizadoInput): Promise<ControlRealizado> {
    return this.controlRealizadoService.create(createControlRealizadoInput);
  }

  @Query(() => [ControlRealizado], { name: 'controlesRealizados' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.controlRealizadoService.findAll(estado);
  }

  @Query(() => ControlRealizado, { name: 'controlRealizado' })
  findOne(@Args('id') id: number): Promise<ControlRealizado> {
    return this.controlRealizadoService.findOne(id);
  }

  @Mutation(() => ControlRealizado)
  updateControlRealizado(@Args('updateControlRealizadoInput') updateControlRealizadoInput: UpdateControlRealizadoInput): Promise<ControlRealizado> {
    return this.controlRealizadoService.update(updateControlRealizadoInput.id, updateControlRealizadoInput);
  }

  @Mutation(() => ControlRealizado)
  removeControlRealizado(@Args('id') id: number): Promise<ControlRealizado> {
    return this.controlRealizadoService.remove(id);
  }
}
