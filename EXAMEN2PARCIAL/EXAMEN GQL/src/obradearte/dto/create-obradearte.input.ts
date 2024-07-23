import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber, IsNotEmpty, IsDateString, Matches } from 'class-validator';

@InputType()
export class CreateObraDeArteInput {
  @Field(() => ID)
  @IsNumber()
  id: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombreArtistico: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  artista: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @Field(() => String)
  @IsString()
  @Matches(/^\$\d+(,\d{3})*(\.\d{0,2})?$/, { message: 'Evaluado en debe estar en formato $1234.56' })
  @IsNotEmpty()
  evaluadoEn: string;

  @Field(() => String, { nullable: true })
  @IsDateString({ strict: true }, { message: 'Fecha de último retoque debe estar en formato YYYY-MM-DD' })
  @IsOptional()
  fechaUltimoRetoque?: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  empresa: string;
}
