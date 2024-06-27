import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SignoVitalService } from './signovital.service';
import { CreateSignoVitalInput } from './dto/create-signovital.input';
import { UpdateSignoVitalInput } from './dto/update-signovital.input';
import { SignoVital } from './entities/signovital.entity';

@Resolver(() => SignoVital)
export class SignoVitalResolver {
  constructor(private readonly signoVitalService: SignoVitalService) {}

  @Mutation(() => SignoVital)
  createSignoVital(@Args('createSignoVitalInput') createSignoVitalInput: CreateSignoVitalInput): Promise<SignoVital> {
    return this.signoVitalService.create(createSignoVitalInput);
  }

  @Query(() => [SignoVital], { name: 'signosVitales' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.signoVitalService.findAll(estado);
  }

  @Query(() => SignoVital, { name: 'signoVital' })
  findOne(@Args('id') id: number): Promise<SignoVital> {
    return this.signoVitalService.findOne(id);
  }

  @Mutation(() => SignoVital)
  updateSignoVital(@Args('updateSignoVitalInput') updateSignoVitalInput: UpdateSignoVitalInput): Promise<SignoVital> {
    return this.signoVitalService.update(updateSignoVitalInput.id, updateSignoVitalInput);
  }

  @Mutation(() => SignoVital)
  removeSignoVital(@Args('id') id: number): Promise<SignoVital> {
    return this.signoVitalService.remove(id);
  }
}
