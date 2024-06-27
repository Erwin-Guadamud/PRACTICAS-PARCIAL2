import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsDateString } from 'class-validator';

@InputType()
export class CreateControlRealizadoInput {
  
  @Field(() => Int)
  @IsInt()
  pacienteId: number;

  @Field(() => Int)
  @IsInt()
  signoVitalId: number;

  @Field(() => String)
  @IsString()
  fecha: string;

  @Field(() => String)
  @IsString()
  hora: string;

  @Field(() => Int)
  @IsInt()
  valor: number;

  @Field(() => String, { nullable: true })
  @IsString()
  estado?: string = "activo";
}
