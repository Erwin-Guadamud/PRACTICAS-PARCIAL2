import { IsOptional, IsString, IsNotEmpty, IsNumber, IsDateString, Matches } from "class-validator";

export class CreateObraDeArteDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    codigo: string;

    @IsString()
    @IsNotEmpty()
    nombreArtistico: string;

    @IsString()
    @IsNotEmpty()
    artista: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsString()
    @Matches(/^\$\d+(,\d{3})*(\.\d{0,2})?$/, { message: 'Evaluado en debe estar en formato $1234.56' })
    @IsNotEmpty()
    evaluadoEn: string;

    @IsDateString({ strict: true }, { message: 'Fecha de último retoque debe estar en formato YYYY-MM-DD' })
    @IsOptional()
    fechaUltimoRetoque: string;

    @IsString()
    @IsNotEmpty()
    empresa: string;
}
