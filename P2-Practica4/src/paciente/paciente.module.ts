import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteResolver } from './paciente.resolver';
import { Paciente } from './entities/paciente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PacienteResolver, PacienteService,],
  imports: [TypeOrmModule.forFeature([Paciente])],
  exports:  [TypeOrmModule]
})
export class PacienteModule {}
