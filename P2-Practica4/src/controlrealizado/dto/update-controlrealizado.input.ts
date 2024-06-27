import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsInt, IsUUID } from 'class-validator';
import { CreateControlRealizadoInput } from './create-controlrealizado.input';

@InputType()
export class UpdateControlRealizadoInput extends PartialType(CreateControlRealizadoInput) {

  @Field(() => ID)
  @IsInt()
  id: number;
}
