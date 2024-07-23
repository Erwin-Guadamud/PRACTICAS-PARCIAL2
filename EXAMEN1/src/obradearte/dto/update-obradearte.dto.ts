import { PartialType } from '@nestjs/mapped-types';
import { CreateObraDeArteDto } from './create-obradearte.dto';

export class UpdateObraDeArteDto extends PartialType(CreateObraDeArteDto) {}
