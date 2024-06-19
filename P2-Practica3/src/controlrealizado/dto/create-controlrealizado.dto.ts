
import { IsNotEmpty, IsOptional, IsInt, IsDate, Min, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateControlRealizadoDto {
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    pacienteId: string;

    @IsString()
    @IsNotEmpty()
    signoVitalId: string;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    fecha: Date;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    hora: Date;

    @IsInt()
    @Min(0)
    @IsNotEmpty()
    valor: number;

    @IsString()
    @IsOptional()
    estado?: string = "activo";
}
