import { PartialType } from '@nestjs/mapped-types';
import { CreateControlRealizadoDto } from './create-controlrealizado.dto';

export class UpdateControlrealizadoDto extends PartialType(CreateControlRealizadoDto) {}


