import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt, IsOptional } from 'class-validator';

@InputType()
export class CreateSignoVitalInput {

  @Field(() => String)
  @IsString()
  descripcion: string;

  @Field(() => Int)
  @IsInt()
  nivelMinimo: number;

  @Field(() => Int)
  @IsInt()
  nivelMaximo: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string = "activo";
}
