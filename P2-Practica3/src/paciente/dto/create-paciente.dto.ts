import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePacienteDto {
    @IsOptional()
    id?: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    identificacion: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    estado?: string = "activo";
}
