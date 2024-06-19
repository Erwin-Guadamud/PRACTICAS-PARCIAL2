import { PartialType } from '@nestjs/mapped-types';
import { CreateSignoVitalDto } from './create-signovital.dto';

export class UpdateSignovitalDto extends PartialType(CreateSignoVitalDto) {}
