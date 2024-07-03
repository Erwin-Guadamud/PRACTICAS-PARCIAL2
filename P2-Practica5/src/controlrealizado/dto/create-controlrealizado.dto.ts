
import { IsInt, IsString, IsDateString } from 'class-validator';


export class CreateControlRealizadoInput {
  
  id: number
  
  @IsInt()
  pacienteId: number;

  @IsInt()
  signoVitalId: number;

  @IsString()
  fecha: string;

  @IsString()
  hora: string;

  @IsInt()
  valor: number;


}