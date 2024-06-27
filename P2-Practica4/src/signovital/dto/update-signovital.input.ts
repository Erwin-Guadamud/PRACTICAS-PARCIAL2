import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreateSignoVitalInput } from './create-signovital.input';

@InputType()
export class UpdateSignoVitalInput extends PartialType(CreateSignoVitalInput) {

  @Field(() => ID)
  @IsInt()
  id: number;
}

