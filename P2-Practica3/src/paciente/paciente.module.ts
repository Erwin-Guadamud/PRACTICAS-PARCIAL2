import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';

@Module({
  controllers: [PacienteController],
  imports: [
    TypeOrmModule.forFeature([ Paciente ]),
  ],
  exports: [TypeOrmModule],
  providers: [PacienteService],
})
export class PacienteModule {}
