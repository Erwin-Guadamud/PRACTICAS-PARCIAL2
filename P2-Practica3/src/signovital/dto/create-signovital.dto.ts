import { IsNotEmpty, IsOptional, IsString, IsInt, Min, MinLength } from "class-validator";

export class CreateSignoVitalDto {
    @IsOptional()
    id?: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    descripcion: string;

    @IsInt()
    @Min(20)
    @IsNotEmpty()
    nivelMinimo: number;

    @IsInt()
    @Min(60)
    @IsNotEmpty()
    nivelMaximo: number;

    @IsString()
    @IsOptional()
    estado?: string = "activo";
}
