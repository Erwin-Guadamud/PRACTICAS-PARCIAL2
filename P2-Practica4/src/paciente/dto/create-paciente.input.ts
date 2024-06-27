import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreatePacienteInput {

  @Field(() => String)
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsString()
  identificacion: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string = "activo";
}
